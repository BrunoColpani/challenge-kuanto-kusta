import { Connection } from 'mongoose';
import { Products } from './product.entity';

export const productsProviders = [
  {
    provide: 'PRODUCT_MODEL',
    useFactory: (connection: Connection) =>
      connection.model('Product', Products),
    inject: ['DATABASE_CONNECTION'],
  },
];
