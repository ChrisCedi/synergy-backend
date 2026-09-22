import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';
import { checkPassword } from 'utils/auth';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async signIn(email: string, pass: string) {
    const user = await this.usersService.findByEmail(email);
    const passCheck = await checkPassword(pass, user.password);
    if (!passCheck) {
      throw new UnauthorizedException();
    }

    const payload = {
      id: user.id,
      companyCustomer: user.companyCustomer,
      name: user.name + user.lastName,
      companyCustomerId: user.companyCustomerId,
    };
    // TODO: Generate a JWT and return it here
    // instead of the user object
    return {
      status: 'success',
      token: await this.jwtService.signAsync(payload),
      data: {
        id: user.id,
        name: `${user.name} ${user.lastName}`,
        role: user.role,
        companyCustomerId: user.companyCustomerId,
        // company: user.companyCustomer.companyName,
      },
    };
  }
}
