import { IsNotEmpty } from 'class-validator';

export class signInDto {
  @IsNotEmpty({ message: 'El correo es obligatorio' })
  email: string;

  @IsNotEmpty({ message: 'La contraseña es obligatorio' })
  pass: string;
}
