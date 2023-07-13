import { IsEmail, IsNumber, IsString } from 'class-validator';

export class CreateUserDto {
  @IsString()
  userName: string;

  @IsEmail()
  email: string;

  @IsString()
  password: string;

  @IsNumber()
  profileId: number;
}
