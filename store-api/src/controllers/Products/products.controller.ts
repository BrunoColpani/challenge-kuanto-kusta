import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
// import { ProductsService } from '../../services/Products/products.service';
// import { CreateProductDto } from '../../services/Products/dto/create-product.dto';
// import { UpdateProductDto } from '../../services/Products/dto/update-product.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@Controller('products')
export class ProductsController {
  //constructor(private readonly productsService: ProductsService) {}
  // @UseGuards(JwtAuthGuard)
  // @Post()
  // create(@Body() createProductDto: CreateProductDto) {
  //   return this.productsService.create(createProductDto);
  // }
  // @Get()
  // findAll() {
  //   return this.productsService.findAll();
  // }
  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.productsService.findOne(+id);
  // }
  // @UseGuards(JwtAuthGuard)
  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
  //   return this.productsService.update(+id, updateProductDto);
  // }
  // @UseGuards(JwtAuthGuard)
  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.productsService.remove(+id);
  // }
}