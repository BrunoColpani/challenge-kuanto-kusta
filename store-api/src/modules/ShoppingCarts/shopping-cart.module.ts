import { Module } from '@nestjs/common';
import { ShoppingCartController } from '../../controllers/ShoppingCarts/shopping-cart.controller';
import { DatabaseModule } from 'src/database/database.module';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    DatabaseModule,
    ClientsModule.register([
      {
        name: 'SHOPPING_CART_COMMUNICATION',
        transport: Transport.TCP,
      },
    ]),
  ],
  controllers: [ShoppingCartController],
  providers: [],
})
export class ShoppingCartModule {}
