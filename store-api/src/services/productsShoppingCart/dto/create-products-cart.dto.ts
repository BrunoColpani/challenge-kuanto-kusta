import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString, IsNotEmpty, MaxLength } from 'class-validator';

export class CreateProductsCartDto {
  @IsString()
  @MaxLength(24)
  @IsNotEmpty()
  @ApiProperty({
    description: 'Put the id of a product',
    example: 'iddoproduto',
    type: String,
  })
  productId: string;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Put the id of a shopping cart',
    example: '1',
    type: Number,
  })
  shoppingCartId: number;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Put the price of a shopping cart',
    example: '2.55',
    type: String,
  })
  price: string;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Put the quantity of products a shopping cart',
    example: '22',
    type: Number,
  })
  quantity: number;
}
