import { Controller, Get } from '@nestjs/common';
// we do here nothing but http handler
@Controller('user') // decorator means this is not a simple class
export class UserController {
  @Get()
  getUser() {
    return 'user data here';
  }
}
