import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CompanyCustomersModule } from './company_customers/company_customers.module';
import { typeOrmConfig } from './config/typeorm.config';
import { UsersModule } from './users/users.module';
import { BalancesModule } from './balances/balances.module';
import { AcquisitionsModule } from './acquisitions/acquisitions.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      useFactory: typeOrmConfig,
      inject: [ConfigService],
    }),
    CompanyCustomersModule,
    UsersModule,
    BalancesModule,
    AcquisitionsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
