import { Injectable } from '@nestjs/common';

import { JwtService } from '@nestjs/jwt';
import { compareSync } from 'bcrypt';
@Injectable()
export class AppService {
  constructor(private readonly jwtService: JwtService) {}

  async login(user: any) {
    const payload = { sub: user.id, email: user.email };
    return {
      token: this.jwtService.sign(payload),
    };
  }

  async validateUser(user: { password: string }, password: string) {
    const isPasswordValid = compareSync(password, user.password);
    if (!isPasswordValid) return null;
    return user;
  }
}
