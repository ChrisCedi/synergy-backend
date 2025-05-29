import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty({ message: 'El nombre es obligatorio' })
  @IsString({ message: 'El nombre debe ser una cadena de texto' })
  name: string;

  @IsNotEmpty({ message: 'El apellido es obligatorio' })
  @IsString({ message: 'El apellido debe ser una cadena de texto' })
  lastName: string;

  @IsEmail({}, { message: 'El email debe ser válido' })
  email: string;

  @IsNotEmpty({ message: 'La contraseña es obligatoria' })
  password: string;

  @IsNotEmpty({ message: 'El rol es obligatorio' })
  role: string;

  createdAt: Date;

  @IsNotEmpty({ message: 'El ID de la empresa cliente es obligatorio' })
  companyCustomerId: number;
}
