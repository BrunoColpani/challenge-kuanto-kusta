import { DataSource } from 'typeorm';
import { ProductsShoppingCart } from './products-shopping-cart.entity';

export const ProductsShoppingCartProviders = [
  {
    provide: 'PRODUCTS_SHOPPING_CART_REPOSITORY',
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(ProductsShoppingCart),
    inject: ['DATA_SOURCE'],
  },
];
