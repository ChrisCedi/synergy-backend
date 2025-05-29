import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { CompanyCustomer } from 'src/company_customers/entities/company_customer.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User, CompanyCustomer])],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
