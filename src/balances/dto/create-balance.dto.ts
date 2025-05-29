import { Type } from 'class-transformer';
import {
  IsNotEmpty,
  IsNumber,
  IsString,
  IsArray,
  ValidateNested,
  IsInt,
  ArrayMinSize,
  ValidateIf,
} from 'class-validator';

class AcquisitionDto {
  @IsString()
  name: string;

  @IsString()
  description: string;

  @IsInt()
  cost: number;

  @IsString()
  paymentMethod: string;

  @ValidateIf((o: AcquisitionDto) => o.paymentMethod === 'financiado')
  @IsInt({ message: 'El pago inicial debe ser un número si es financiado' })
  initialPayment: number;

  @ValidateIf((o: AcquisitionDto) => o.paymentMethod === 'financiado')
  @IsString({ message: 'El plazo es requerido' })
  remainingAmount: string;
}

export class CreateBalanceDto {
  @IsNotEmpty({ message: 'El nombre de la empresa es obligatorio' })
  @IsString({ message: 'El nombre debe ser una cadena de texto' })
  companyName: string;

  @IsNotEmpty({ message: 'El capital es obligatorio' })
  @IsNumber({}, { message: 'El capital debe ser un número' })
  capital: number;

  createdAt: Date;

  @IsArray({ message: 'Las adquisiciones deben ser un arreglo' })
  @ArrayMinSize(1, { message: 'Debe haber al menos una adquisición' })
  @ValidateNested({ each: true })
  @Type(() => AcquisitionDto)
  acquisitions: AcquisitionDto[];
}
