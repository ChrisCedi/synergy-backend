import { Module } from '@nestjs/common';
import { AcquisitionsService } from './acquisitions.service';
import { AcquisitionsController } from './acquisitions.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Acquisition } from './entities/acquisition.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Acquisition])],
  controllers: [AcquisitionsController],
  providers: [AcquisitionsService],
})
export class AcquisitionsModule {}
