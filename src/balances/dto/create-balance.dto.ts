import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateBalanceDto {
  @IsNotEmpty({ message: 'El nombre de la empresa es obligatorio' })
  @IsString({ message: 'El nombre debe ser una cadena de texto' })
  companyName: string;

  @IsNotEmpty({ message: 'El capital es obligatorio' })
  @IsNumber({}, { message: 'El capital debe ser un número' })
  capital: number;

  createdAt: Date;
}
