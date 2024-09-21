import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { UserService } from 'src/user/user.service';
import { User } from 'src/user/entities/user.entity';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly usersService: UserService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: 'my_secret',
      // It is not a good practice to have this hard-coded secret but for the purpose of this event, we shall let this go
    });
  }

  async validate(payload: any): Promise<User> {
    // Optionally, you can fetch the user from the database
    const user = await this.usersService.findById(payload.sub);
    return user; // This will be available in req.user
  }
}
