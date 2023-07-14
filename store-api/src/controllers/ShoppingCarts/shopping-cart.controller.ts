import {
  Body,
  Controller,
  Get,
  Inject,
  Post,
  UseGuards,
  Param,
  Delete,
  HttpCode,
} from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import {
  ApiBearerAuth,
  ApiBody,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { CreateShoppingcartDto } from 'src/services/ShoppingCarts/dto/create-shoppingcart.dto';
import { CreateProductsCartDto } from 'src/services/productsShoppingCart/dto/create-products-cart.dto';

@ApiTags('shopping-cart')
@ApiBearerAuth()
@Controller('shopping-cart')
export class ShoppingCartController {
  constructor(
    @Inject('SHOPPING_CART_COMMUNICATION')
    private readonly communicationClient: ClientProxy,
  ) {}

  @HttpCode(200)
  @ApiOperation({ summary: 'List all shopping-cart' })
  @ApiResponse({
    status: 200,
    description: 'List all shopping carta',
  })
  @UseGuards(JwtAuthGuard)
  @Get()
  findAll() {
    return this.communicationClient.send('shopping-cart', {});
  }

  @HttpCode(200)
  @ApiOperation({ summary: 'List a shopping-cart by id' })
  @UseGuards(JwtAuthGuard)
  @Get(':id')
  @ApiResponse({
    status: 200,
    description: 'Get a shopping cart by ID',
  })
  findOne(@Param('id') id: number) {
    return this.communicationClient.send('shopping-cart-by-id', id);
  }

  @HttpCode(201)
  @ApiOperation({ summary: 'Add shopping cart' })
  @ApiResponse({
    status: 201,
    description: 'Create a new shopping cart',
  })
  @ApiResponse({
    status: 500,
    description: 'Internal server error',
  })
  @UseGuards(JwtAuthGuard)
  @ApiBody({ type: CreateShoppingcartDto })
  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() createShoppingCartDto: CreateShoppingcartDto) {
    return this.communicationClient.send(
      'shopping-cart-create',
      createShoppingCartDto,
    );
  }

  @HttpCode(201)
  @ApiOperation({ summary: 'Add a product to the shopping cart' })
  @ApiResponse({
    status: 201,
    description: 'Add a product to the shopping cart',
  })
  @ApiResponse({
    status: 500,
    description: 'Internal server error',
  })
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
  @ApiResponse({
    status: 200,
    description: 'Remove a product from the shopping cart',
  })
  removeProductCart(@Param('id') id: number) {
    return this.communicationClient.send('proudct-shopping-cart-delete', id);
  }
}
