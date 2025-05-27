import { PartialType } from '@nestjs/mapped-types';
import { CreateCompanyCustomerDto } from './create-company_customer.dto';

export class UpdateCompanyCustomerDto extends PartialType(CreateCompanyCustomerDto) {}
