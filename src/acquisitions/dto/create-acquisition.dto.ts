import { IsString, IsOptional, IsNumber } from 'class-validator';

export class CreateAcquisitionDto {
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
