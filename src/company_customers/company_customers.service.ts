import { Injectable } from '@nestjs/common';
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

  create(createCompanyCustomerDto: CreateCompanyCustomerDto) {
    return this.companyCustomerRepository.save(createCompanyCustomerDto);
  }

  findAll() {
    return `This action returns all companyCustomers`;
  }

  findOne(id: number) {
    return `This action returns a #${id} companyCustomer`;
  }

  update(id: number, updateCompanyCustomerDto: UpdateCompanyCustomerDto) {
    return `This action updates a #${id} companyCustomer`;
  }

  remove(id: number) {
    return `This action removes a #${id} companyCustomer`;
  }
}
