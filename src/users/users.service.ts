import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
//import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { CompanyCustomer } from 'src/company_customers/entities/company_customer.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
    @InjectRepository(CompanyCustomer)
    private readonly companyCustomerRepository: Repository<CompanyCustomer>,
  ) {}

  async create(createUserDto: CreateUserDto) {
    const companyCustomer = await this.companyCustomerRepository.findOneBy({
      id: createUserDto.companyCustomerId,
    });

    const userExists = await this.userRepository.findOneBy({
      email: createUserDto.email,
    });

    if (!companyCustomer) {
      const errors: string[] = [];
      errors.push('La empresa no existe');
      throw new NotFoundException(errors);
    }

    if (userExists) {
      const errors: string[] = [];
      errors.push('El correo ya existe');
      throw new ConflictException(errors);
    }

    return this.userRepository.save({
      ...createUserDto,
      companyCustomer,
    });
  }

  findAll() {
    return this.userRepository.find();
  }

  async findOne(id: number) {
    const user = await this.userRepository.findOne({
      where: { id },
    });

    if (!user) {
      throw new NotFoundException('El usuario no existe');
    }

    return user;
  }

  /*   update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  } */

  async remove(id: number) {
    const user = await this.findOne(id);

    await this.userRepository.remove(user);

    return `Ususario eliminado`;
  }
}
