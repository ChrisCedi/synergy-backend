import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async signIn(email: string, pass: string) {
    const user = await this.usersService.findByEmail(email);
    if (user?.password !== pass) {
      throw new UnauthorizedException();
    }

    const payload = {
      id: user.id,
      companyCustomer: user.companyCustomer,
      name: user.name + user.lastName,
    };
    // TODO: Generate a JWT and return it here
    // instead of the user object
    return {
      status: 'success',
      token: await this.jwtService.signAsync(payload),
    };
  }
}
