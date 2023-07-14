import { Controller, Request, Post, UseGuards, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { UpdateUserDto } from 'src/services/Users/dto/update-user.dto';
import { LoginDto } from './login.dto';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  @ApiOperation({ summary: 'Login with email and password' })
  @ApiBody({
    description: 'AuthLogin DTO',
    type: LoginDto,
    examples: {},
    required: true,
  })
  @ApiResponse({
    status: 200,
    description:
      '"access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImdhYnJpZWwxQGVtYWlsLmNvbSIsInVzZXJOYW1lIjoiR2FicmllbCIsImlkIjoxLCJpYXQiOjE2ODkyNzE4NTgsImV4cCI6MTY4OTI3MzA1OH0.Zjn2s2Lf1RYFRxM2CNYWauV3hsrRjkac8F1Rp3YdaGs"',
  })
  @ApiBody({ type: UpdateUserDto })
  async login(@Request() req) {
    return this.authService.login(req.user);
  }
}
