import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateAcquisitionDto } from './dto/create-acquisition.dto';
import { UpdateAcquisitionDto } from './dto/update-acquisition.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Acquisition } from './entities/acquisition.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AcquisitionsService {
  constructor(
    @InjectRepository(Acquisition)
    private readonly acquisitionRepository: Repository<Acquisition>,
  ) {}

  async create(createAcquisitionDto: CreateAcquisitionDto) {
    const newAcquisition =
      await this.acquisitionRepository.save(createAcquisitionDto);
    return {
      status: 'success',
      message: 'Adquisición creada con exito',
      data: newAcquisition,
    };
  }

  async findAll() {
    const acquisitions = await this.acquisitionRepository.find();
    return {
      status: 'success',
      message: 'Adquisiciones',
      data: acquisitions,
    };
  }

  async findAllByBalance(id: number) {
    const acquisitionsByBalance = await this.acquisitionRepository.find({
      where: { balanceId: id },
    });

    if (!acquisitionsByBalance) {
      throw new NotFoundException({
        status: 'error',
        message: 'El balance no existe',
      });
    }

    return {
      status: 'success',
      message: 'Lista de adquisiciones',
      data: acquisitionsByBalance,
    };
  }

  async findOne(id: number) {
    const acquisitionById = await this.acquisitionRepository.findOne({
      where: { id },
    });

    if (!acquisitionById) {
      throw new NotFoundException({
        status: 'error',
        message: 'Adquisición no encontrada',
      });
    }
    return {
      status: 'success',
      message: 'Adquisición obtenida con exito',
      data: acquisitionById,
    };
  }

  async update(id: number, updateAcquisitionDto: UpdateAcquisitionDto) {
    const acquisition = await this.acquisitionRepository.findOne({
      where: { id },
    });

    if (!acquisition) {
      throw new NotFoundException({
        status: 'error',
        message: 'Adquisición no encontrada',
      });
    }

    acquisition.name = updateAcquisitionDto.name;
    if (updateAcquisitionDto.description !== undefined) {
      acquisition.description = updateAcquisitionDto.description;
    }

    acquisition.cost = updateAcquisitionDto.cost;
    acquisition.paymentMethod = updateAcquisitionDto.paymentMethod;
    acquisition.initialPayment = updateAcquisitionDto.initialPayment;
    acquisition.remainingAmount = updateAcquisitionDto.remainingAmount;

    return this.acquisitionRepository.save(acquisition);
  }

  async remove(id: number) {
    const acquisition = await this.findOne(id);

    await this.acquisitionRepository.remove(acquisition.data);

    return {
      status: 'success',
      message: 'Adquisición eliminada',
    };
  }
}
