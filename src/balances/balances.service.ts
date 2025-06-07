import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateBalanceDto } from './dto/create-balance.dto';
import { UpdateBalanceDto } from './dto/update-balance.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Balance } from './entities/balance.entity';
import { Repository } from 'typeorm';

@Injectable()
export class BalancesService {
  constructor(
    @InjectRepository(Balance)
    private readonly balanceRepository: Repository<Balance>,
  ) {}

  async create(createBalanceDto: CreateBalanceDto) {
    const balance = await this.balanceRepository.findOne({
      where: { companyName: createBalanceDto.companyName },
    });

    if (balance) {
      throw new BadRequestException('La empresa ya existe');
    }

    return this.balanceRepository.save(createBalanceDto);
  }

  async findAll() {
    const balances = await this.balanceRepository.find({
      relations: ['acquisitions'],
    });
    return {
      status: 'sucess',
      messsge: 'Balances obtenidos con exito',
      data: balances,
    };
  }

  async findByCompany(id: number) {
    const balances = await this.balanceRepository.find({
      where: { companyCustomerId: id },
      relations: ['acquisitions'],
    });
    return {
      status: 'sucess',
      messsge: 'Balances obtenidos con exito',
      data: balances,
    };
  }

  async findOne(id: number) {
    const balance = await this.balanceRepository.findOne({
      where: { id },
    });

    if (!balance) {
      throw new NotFoundException('Balance no encontrado');
    }
    return balance;
  }

  async update(id: number, updateBalanceDto: UpdateBalanceDto) {
    const balance = await this.findOne(id);

    balance.companyName = updateBalanceDto.companyName;
    balance.capital = updateBalanceDto.capital;

    const balanceUpdate = await this.balanceRepository.save(balance);

    return {
      status: 'success',
      message: 'Balance actualizado correctamente',
      data: balanceUpdate,
    };
  }

  async remove(id: number) {
    const balance = await this.findOne(id);

    if (!balance) {
      throw new NotFoundException(`Balance no encontrado con id ${id}`);
    }

    await this.balanceRepository.remove(balance);

    return {
      status: 'success',
      message: 'Balance eliminado exitosamente',
    };
  }
}
