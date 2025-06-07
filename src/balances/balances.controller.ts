import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { BalancesService } from './balances.service';
import { CreateBalanceDto } from './dto/create-balance.dto';
import { UpdateBalanceDto } from './dto/update-balance.dto';
import { IdValidationPipe } from 'src/pipes/id-validation/id-validation.pipe';

@Controller('balances')
export class BalancesController {
  constructor(private readonly balancesService: BalancesService) {}

  @Post()
  create(@Body() createBalanceDto: CreateBalanceDto) {
    return this.balancesService.create(createBalanceDto);
  }

  @Get()
  findAll() {
    return this.balancesService.findAll();
  }

  @Get('/findByCompany/:id')
  findByCompany(@Param('id', IdValidationPipe) id: string) {
    return this.balancesService.findByCompany(+id);
  }

  @Get(':id')
  findOne(@Param('id', IdValidationPipe) id: string) {
    return this.balancesService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id', IdValidationPipe) id: string,
    @Body() updateBalanceDto: UpdateBalanceDto,
  ) {
    return this.balancesService.update(+id, updateBalanceDto);
  }

  @Delete(':id')
  remove(@Param('id', IdValidationPipe) id: string) {
    return this.balancesService.remove(+id);
  }
}
