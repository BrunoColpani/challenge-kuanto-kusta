import {
  Controller,
  Get,
  Post,
  Body,
  UseGuards,
  Inject,
  HttpCode,
} from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { CreateProductDto } from '../../services/Products/dto/create-product.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import {
  ApiBody,
  ApiHeader,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';

@ApiTags('products')
@Controller('products')
export class ProductsController {
  constructor(
    @Inject('PRODUCTS_COMMUNICATION')
    private readonly _communicationClient: ClientProxy,
  ) {}

  @HttpCode(201)
  @ApiOperation({ summary: 'Add product' })
  @ApiResponse({
    status: 201,
    description: 'Add product',
  })
  @ApiResponse({
    status: 500,
    description: 'Internal server error',
  })
  @UseGuards(JwtAuthGuard)
  @Post()
  @ApiBody({ type: CreateProductDto })
  create(@Body() createProductDto: CreateProductDto) {
    return this._communicationClient.send('product-create', createProductDto);
  }

  @HttpCode(200)
  @ApiOperation({ summary: 'List all products' })
  @ApiResponse({
    status: 200,
    description: 'List all products',
  })
  @Get()
  findAll() {
    return this._communicationClient.send('products', {});
  }
}
