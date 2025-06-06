import { PartialType } from '@nestjs/mapped-types';
import { CreateAcquisitionDto } from './create-acquisition.dto';
import { IsString, IsOptional, IsNumber } from 'class-validator';

export class UpdateAcquisitionDto extends PartialType(CreateAcquisitionDto) {
  @IsString()
  name: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsNumber()
  cost: number;

  @IsString()
  paymentMethod: string;

  @IsNumber()
  initialPayment: number;

  @IsNumber()
  balanceId: number;

  @IsString()
  remainingAmount: string;
}
