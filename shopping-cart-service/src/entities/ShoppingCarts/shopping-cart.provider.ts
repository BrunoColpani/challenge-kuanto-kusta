import { DataSource } from 'typeorm';
import { ShoppingCarts } from './shopping-cart.entity';
export const shoppingCartProviders = [
  {
    provide: 'SHOPPINGCARTS_REPOSITORY',
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(ShoppingCarts),
    inject: ['DATA_SOURCE'],
  },
];
