import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { RegisterDto } from './dto/registerUser.dto';
import bcrypt from 'bcrypt';
@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService) {}
  async registerUser(registerUserDto: RegisterDto) {
    // logic to register a user
    /*
    check the user data mail
    hash the password
    save the user in db
    tokenen generation
    send welcome email
    */
    const hashPassword = await bcrypt.hash(registerUserDto.password, 10);
    console.log('register', registerUserDto);
    return this.userService.createUser({
      ...registerUserDto,
      password: hashPassword,
    });
  }
}
