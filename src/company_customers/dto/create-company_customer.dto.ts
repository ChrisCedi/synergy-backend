import { IsNotEmpty } from 'class-validator';

export class CreateCompanyCustomerDto {
  @IsNotEmpty({ message: 'El nombre de la empresa es obligatorio' })
  companyName: string;

  @IsNotEmpty({ message: 'El rfc de la empresa es obligatorio' })
  rfc: string;
}
