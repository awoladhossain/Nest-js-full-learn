import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
<<<<<<< HEAD
=======

// controller is a kinds of bridge between route and service
>>>>>>> 3ecf096 (nest js auth guard)
