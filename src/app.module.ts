import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
<<<<<<< HEAD
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [AuthModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
=======
import { CategoryModule } from './category/category.module';
import { EmployeeModule } from './employee/employee.module';
import { ProductController } from './product/product.controller';
import { ProductService } from './product/product.service';
import { StudentModule } from './student/student.module';
import { UserController } from './user/user.controller';
import { TaskModule } from './task/task.module';
import { CustomerModule } from './customer/customer.module';
import { MynameController } from './myname/myname.controller';

@Module({
  imports: [
    EmployeeModule,
    CategoryModule,
    StudentModule,
    TaskModule,
    CustomerModule,
  ],
  controllers: [AppController, UserController, ProductController, MynameController],
  providers: [AppService, ProductService],
>>>>>>> 3ecf096 (nest js auth guard)
})
export class AppModule {}
