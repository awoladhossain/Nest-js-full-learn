import { Injectable } from '@nestjs/common';

// ** we do here nothing but all the bussines logic here **
@Injectable()
export class CategoryService {
  getCategories() {
    return ['a', 'b', 'c'];
  }
}
