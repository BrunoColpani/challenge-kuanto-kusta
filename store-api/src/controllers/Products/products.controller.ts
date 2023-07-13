import { Controller, Get, Post, Body, UseGuards, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { CreateProductDto } from '../../services/Products/dto/create-product.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@Controller('products')
export class ProductsController {
  constructor(
    @Inject('PRODUCTS_COMMUNICATION')
    private readonly _communicationClient: ClientProxy,
  ) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() createProductDto: CreateProductDto) {
    return this._communicationClient.send('product-create', createProductDto);
  }
  @Get()
  findAll() {
    return this._communicationClient.send('products', {});
  }
}
