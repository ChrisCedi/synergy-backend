import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CompanyCustomersService } from './company_customers.service';
import { CreateCompanyCustomerDto } from './dto/create-company_customer.dto';
import { UpdateCompanyCustomerDto } from './dto/update-company_customer.dto';
import { IdValidationPipe } from 'src/pipes/id-validation/id-validation.pipe';

@Controller('company-customers')
export class CompanyCustomersController {
  constructor(
    private readonly companyCustomersService: CompanyCustomersService,
  ) {}

  @Post()
  create(@Body() createCompanyCustomerDto: CreateCompanyCustomerDto) {
    console.log('Creating company customer:', createCompanyCustomerDto);
    return this.companyCustomersService.create(createCompanyCustomerDto);
  }

  @Get()
  findAll() {
    return this.companyCustomersService.findAll();
  }

  @Get(':id')
  findOne(
    @Param('id', IdValidationPipe)
    id: string,
  ) {
    return this.companyCustomersService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id', IdValidationPipe) id: string,
    @Body() updateCompanyCustomerDto: UpdateCompanyCustomerDto,
  ) {
    return this.companyCustomersService.update(+id, updateCompanyCustomerDto);
  }

  @Delete(':id')
  remove(@Param('id', IdValidationPipe) id: string) {
    return this.companyCustomersService.remove(+id);
  }
}
