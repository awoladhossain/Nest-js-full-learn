import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductService {
  private products = [
    {
      id: 1,
      name: 'Product 1',
      description: 'Product 1 description',
      price: 100,
    },
    {
      id: 2,
      name: 'Product 2',
      description: 'Product 2 description',
      price: 200,
    },
    {
      id: 3,
      name: 'Product 3',
      description: 'Product 3 description',
      price: 300,
    },
  ];
  getAllProducts() {
    return this.products;
  }
  getProductById(id: number) {
    const result = this.products.find((product) => product.id === id);
    return result;
  }
}
