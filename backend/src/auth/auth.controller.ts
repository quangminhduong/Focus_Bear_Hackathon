import { Controller, Post, Body, UseGuards, Req, Param } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { LoginResponse } from './interfaces/login-response.interface';
import { JwtAuthGuard } from './guard/jwt-auth.guard';
import { UserService } from 'src/user/user.service';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly userService: UserService,
  ) {}

  @Post('login')
  async login(@Body() loginDto: LoginDto): Promise<LoginResponse> {
    return this.authService.loginUser(loginDto);
  }

  @UseGuards(JwtAuthGuard) // Protect the route with the JWT guard
  @Post(':targetUserId/friend-request')
  async sendFriendRequest(
    @Req() req,
    @Param('targetUserId') targetUserId: number,
  ) {
    const currentUserId = req.user.id; // Get the user ID from the JWT token

    return this.userService.sendFriendRequest(currentUserId, targetUserId);
  }
}
