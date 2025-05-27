import { Module } from '@nestjs/common';
import { CompanyCustomersService } from './company_customers.service';
import { CompanyCustomersController } from './company_customers.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CompanyCustomer } from './entities/company_customer.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CompanyCustomer])],
  controllers: [CompanyCustomersController],
  providers: [CompanyCustomersService],
})
export class CompanyCustomersModule {}
