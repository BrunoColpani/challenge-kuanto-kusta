import { IsNumber, IsString, IsNotEmpty, MaxLength } from 'class-validator';

export class CreateProductsCartDto {
  @IsString()
  @MaxLength(24)
  @IsNotEmpty()
  productId: string;

  @IsNumber()
  @IsNotEmpty()
  shoppingCartId: number;

  @IsString()
  @IsNotEmpty()
  price: string;

  @IsNumber()
  @IsNotEmpty()
  quantity: number;
}
