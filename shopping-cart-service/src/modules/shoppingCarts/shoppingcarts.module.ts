import { Module } from '@nestjs/common';
import { ShoppingcartsService } from '../../services/shoppingCarts/shoppingcarts.service';
import { ShoppingcartsController } from '../../controllers/shoppingCarts/shoppingcarts.controller';
import { shoppingCartProviders } from 'src/entities/ShoppingCarts/shopping-cart.provider';
import { DatabaseModule } from 'src/database/database.module';
import { ConfigModule } from '@nestjs/config';
import { ProductsShoppingCartProviders } from 'src/entities/ProductsShoppingcart/products.entity.provider';

@Module({
  imports: [
    DatabaseModule,
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
  ],
  controllers: [ShoppingcartsController],
  providers: [
    ShoppingcartsService,
    ...shoppingCartProviders,
    ...ProductsShoppingCartProviders,
  ],
})
export class ShoppingcartsModule {}
