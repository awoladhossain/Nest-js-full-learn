import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/guards/auth/auth.guard';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  @UseGuards(AuthGuard)
  getProducts() {
    const res = this.productService.getAllProducts();
    return res;
  }
  @Get(':id')
  getProductById(@Param('id') id: string) {
    const res = this.productService.getProductById(Number(id));
    return res;
  }
}
