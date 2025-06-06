import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCompanyCustomerDto } from './dto/create-company_customer.dto';
import { UpdateCompanyCustomerDto } from './dto/update-company_customer.dto';
import { CompanyCustomer } from './entities/company_customer.entity';

@Injectable()
export class CompanyCustomersService {
  constructor(
    @InjectRepository(CompanyCustomer)
    private readonly companyCustomerRepository: Repository<CompanyCustomer>,
  ) {}

  async create(createCompanyCustomerDto: CreateCompanyCustomerDto) {
    const companyCustomer = await this.companyCustomerRepository.findOne({
      where: {
        companyName: createCompanyCustomerDto.companyName,
      },
    });

    if (companyCustomer) {
      throw new BadRequestException({
        status: 'error',
        message: 'La compañia ya existe',
      });
    }
    return this.companyCustomerRepository.save(createCompanyCustomerDto);
  }

  findAll() {
    return this.companyCustomerRepository.find();
  }

  async findOne(id: number) {
    const companyCustomer = await this.companyCustomerRepository.findOne({
      where: { id },
      relations: ['users'],
    });

    if (!companyCustomer) {
      throw new NotFoundException({
        status: 'error',
        message: 'La empresa cliente no existe',
      });
    }
    return companyCustomer;
  }

  async update(id: number, updateCompanyCustomerDto: UpdateCompanyCustomerDto) {
    const companyCustomer = await this.findOne(id);
    companyCustomer.companyName = updateCompanyCustomerDto.companyName;
    companyCustomer.rfc = updateCompanyCustomerDto.rfc;

    return this.companyCustomerRepository.save(companyCustomer);
  }

  async remove(id: number) {
    const companyCustomer = await this.findOne(id);

    await this.companyCustomerRepository.remove(companyCustomer);
    return `Empresa eliminada`;
  }
}
