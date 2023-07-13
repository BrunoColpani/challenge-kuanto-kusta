import {
  Body,
  Controller,
  Get,
  Inject,
  Post,
  UseGuards,
  Param,
  Patch,
  Delete,
} from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { CreateShoppingcartDto } from 'src/services/ShoppingCarts/dto/create-shoppingcart.dto';
import { UpdateShoppingcartDto } from 'src/services/ShoppingCarts/dto/update-shoppingcart.dto';
import { CreateProductsCartDto } from 'src/services/productsShoppingCart/dto/create-products-cart.dto';

@Controller('shopping-cart')
export class ShoppingCartController {
  constructor(
    @Inject('SHOPPING_CART_COMMUNICATION')
    private readonly communicationClient: ClientProxy,
  ) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  findAll() {
    return this.communicationClient.send('shopping-cart', {});
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.communicationClient.send('shopping-cart-by-id', id);
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() createShoppingCartDto: CreateShoppingcartDto) {
    return this.communicationClient.send(
      'shopping-cart-create',
      createShoppingCartDto,
    );
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  update(
    @Param('id') id: number,
    @Body() updateShoppingCartDto: UpdateShoppingcartDto,
  ) {
    return this.communicationClient.send('shopping-cart-update', {
      shoppingCartId: id,
      ...updateShoppingCartDto,
    });
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.communicationClient.send('shopping-cart-delete', id);
  }

  @UseGuards(JwtAuthGuard)
  @Post('products')
  addProductCart(@Body() createProductShoppingCartDto: CreateProductsCartDto) {
    return this.communicationClient.send(
      'proudct-shopping-cart-add',
      createProductShoppingCartDto,
    );
  }

  @UseGuards(JwtAuthGuard)
  @Delete('products/:id')
  removeProductCart(@Param('id') id: number) {
    return this.communicationClient.send('proudct-shopping-cart-delete', id);
  }
}
