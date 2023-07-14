import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNumber, IsOptional } from 'class-validator';

export class CreateShoppingcartDto {
  @IsNumber()
  @ApiProperty({
    description: 'Put the user id of a shopping cart',
    example: '2',
    type: Number,
  })
  userId: number;

  @IsBoolean()
  @IsOptional()
  @ApiProperty({
    description: 'Put the status of a shopping cart',
    example: 'true',
    type: Boolean,
  })
  isOpen: boolean;
}
