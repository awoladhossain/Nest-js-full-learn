import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/registerUser.dto';

@Controller('auth') // /auth/register
export class AuthController {
  // authService: AuthService;
  constructor(private readonly authService: AuthService) {
    // this.authService = authService;
  }
  @Post('register')
  register(@Body() registerUserDto: RegisterDto) {
    // logic to register a user

    const result = this.authService.registerUser(registerUserDto);
    return result;
  }
}
