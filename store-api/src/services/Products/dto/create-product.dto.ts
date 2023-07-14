import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateProductDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Put the id of a product',
    example: 'ifwfmeofmrogmerogno',
    type: String,
  })
  productId: string;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Put the price of a product',
    example: '45.89',
    type: String,
  })
  price: number;
}
