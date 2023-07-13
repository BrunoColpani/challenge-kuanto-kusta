import { IsNumber } from 'class-validator';

export class CreateShoppingcartDto {
  @IsNumber()
  userId: number;
}
