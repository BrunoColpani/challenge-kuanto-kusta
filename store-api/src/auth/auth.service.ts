import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/services/Users/users.service';
import { JwtService } from '@nestjs/jwt';
import { Users } from 'src/entities/Users/user.entity';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string): Promise<any> {
    return await this.usersService.validateUser(email, password);
  }

  async login(user: Users) {
    const { userName, email, profileId, id } = user;
    const payload = { email, userName, profileId, id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
