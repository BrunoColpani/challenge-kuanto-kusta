import { Controller } from '@nestjs/common';
import { EventPattern, Payload } from '@nestjs/microservices';
import { ProductsService } from '../../services/products/products.service';
import { CreateProductDto } from '../../services/products/dto/create-product.dto';
import { UpdateProductDto } from '../../services/products/dto/update-product.dto';

@Controller()
export class ProductsController {
  constructor(private readonly _productsService: ProductsService) {}

  @EventPattern('products')
  findAll() {
    return this._productsService.findAll();
  }

  @EventPattern('product-create')
  create(@Payload() createShoppingcartDto: CreateProductDto) {
    return this._productsService.create(createShoppingcartDto);
  }
}
