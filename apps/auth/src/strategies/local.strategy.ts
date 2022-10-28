import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { AppService } from 'src/app.service';
import { MessagesHelper } from 'src/helpers/messages.helper';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AppService) {
    super({ usernameField: 'email ' });
  }

  async validate(user: { password: string }, password: string) {
    const validatedUser = await this.authService.validateUser(user, password);

    if (!validatedUser) {
      throw new UnauthorizedException(MessagesHelper.PASSWORD_OR_EMAIL_INVALID);
    }
    return validatedUser;
  }
}
