import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AcquisitionsService } from './acquisitions.service';
import { CreateAcquisitionDto } from './dto/create-acquisition.dto';
import { UpdateAcquisitionDto } from './dto/update-acquisition.dto';
import { IdValidationPipe } from 'src/pipes/id-validation/id-validation.pipe';

@Controller('acquisitions')
export class AcquisitionsController {
  constructor(private readonly acquisitionsService: AcquisitionsService) {}

  @Post()
  create(@Body() createAcquisitionDto: CreateAcquisitionDto) {
    return this.acquisitionsService.create(createAcquisitionDto);
  }

  @Get()
  findAll() {
    return this.acquisitionsService.findAll();
  }

  @Get('/byBalance/:id')
  findAllByBalance(@Param('id', IdValidationPipe) id: string) {
    return this.acquisitionsService.findAllByBalance(+id);
  }

  @Get('/byId/:id')
  findOne(@Param('id', IdValidationPipe) id: string) {
    return this.acquisitionsService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id', IdValidationPipe) id: string,
    @Body() updateAcquisitionDto: UpdateAcquisitionDto,
  ) {
    return this.acquisitionsService.update(+id, updateAcquisitionDto);
  }

  @Delete(':id')
  remove(@Param('id', IdValidationPipe) id: string) {
    return this.acquisitionsService.remove(+id);
  }
}
