import { IsBoolean, IsNumber, IsOptional } from 'class-validator';

export class CreateShoppingcartDto {
  @IsNumber()
  userId: number;

  @IsNumber()
  @IsOptional()
  totalPrice: number;

  @IsNumber()
  @IsOptional()
  totalQuantity: number;

  @IsBoolean()
  @IsOptional()
  isOpen: boolean;
}
