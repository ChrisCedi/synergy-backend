import { Module } from '@nestjs/common';
import { CompanyCustomersService } from './company_customers.service';
import { CompanyCustomersController } from './company_customers.controller';

@Module({
  controllers: [CompanyCustomersController],
  providers: [CompanyCustomersService],
})
export class CompanyCustomersModule {}
