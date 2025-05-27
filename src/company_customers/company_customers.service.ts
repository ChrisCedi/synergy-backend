import { Injectable } from '@nestjs/common';
import { CreateCompanyCustomerDto } from './dto/create-company_customer.dto';
import { UpdateCompanyCustomerDto } from './dto/update-company_customer.dto';

@Injectable()
export class CompanyCustomersService {
  create(createCompanyCustomerDto: CreateCompanyCustomerDto) {
    return 'This action adds a new companyCustomer';
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
