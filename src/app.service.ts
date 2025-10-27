import { Injectable } from '@nestjs/common';
<<<<<<< HEAD

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
=======
// where we write the logical part of our application
@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World bangladesh!';
>>>>>>> 3ecf096 (nest js auth guard)
  }
}
