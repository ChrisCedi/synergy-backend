import { Injectable, NotFoundException } from '@nestjs/common';
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

  create(createBalanceDto: CreateBalanceDto) {
    return this.balanceRepository.save(createBalanceDto);
  }

  findAll() {
    return this.balanceRepository.find();
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

  update(id: number, updateBalanceDto: UpdateBalanceDto) {
    return `This action updates a #${id} balance`;
  }

  async remove(id: number) {
    const balance = await this.findOne(id);

    if (!balance) {
      throw new NotFoundException(`Balance no encontrado con id ${id}`);
    }

    await this.balanceRepository.remove(balance);

    return 'Balance eliminado exitosamente';
  }
}
