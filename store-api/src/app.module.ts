import { Module } from '@nestjs/common';
import { UsersModule } from './modules/Users/users.module';
import { ShoppingCartModule } from './modules/ShoppingCarts/shopping-cart.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    UsersModule,
    ShoppingCartModule,
    AuthModule,
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
