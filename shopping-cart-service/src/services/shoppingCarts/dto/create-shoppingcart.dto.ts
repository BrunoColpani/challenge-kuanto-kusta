import { IsBoolean, IsNumber, IsOptional } from 'class-validator';

export class CreateShoppingcartDto {
  @IsNumber()
  userId: number;

  @IsBoolean()
  @IsOptional()
  isOpen: boolean;
}
