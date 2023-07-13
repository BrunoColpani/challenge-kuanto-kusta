import { DataSource } from 'typeorm';
import { ShoppingCarts } from './shopping-cart.entity';
export const shoppingCartProviders = [
  {
    provide: 'SHOPPING_CART_COMMUNICATION',
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(ShoppingCarts),
    inject: ['DATA_SOURCE'],
  },
];
