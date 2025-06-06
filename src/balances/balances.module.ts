import { Module } from '@nestjs/common';
import { BalancesService } from './balances.service';
import { BalancesController } from './balances.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Balance } from './entities/balance.entity';
import { CompanyCustomer } from 'src/company_customers/entities/company_customer.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Balance, CompanyCustomer])],
  controllers: [BalancesController],
  providers: [BalancesService],
})
export class BalancesModule {}
