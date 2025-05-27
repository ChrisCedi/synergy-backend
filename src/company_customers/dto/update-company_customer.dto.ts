import { PartialType } from '@nestjs/mapped-types';
import { CreateCompanyCustomerDto } from './create-company_customer.dto';
import { IsNotEmpty } from 'class-validator';

export class UpdateCompanyCustomerDto extends PartialType(
  CreateCompanyCustomerDto,
) {
  @IsNotEmpty({ message: 'El nombre de la empresa es obligatorio' })
  companyName: string;

  @IsNotEmpty({ message: 'El rfc de la empresa es obligatorio' })
  rfc: string;
}
