// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();
import { ConfigService } from '@nestjs/config';
import { DataSource } from 'typeorm';
import { CreateUsersTable1689293814345 } from './migrations/1689293814345-createUsersTable';
import { CreateShoppingCarts1689293835557 } from './migrations/1689293835557-createShoppingCarts';
import { CreateProductsShoppingCarts1689293849337 } from './migrations/1689293849337-createProductsShoppingCarts';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async (configService: ConfigService) => {
      const dataSource = new DataSource({
        type: 'postgres',
        host: configService.get<string>('DATABASE_HOST'),
        port: configService.get<number>('DATABASE_PORT'),
        database: configService.get<string>('DATABASE_NAME'),
        username: configService.get<string>('DATABASE_USER'),
        password: configService.get<string>('DATABASE_PASSWORD'),
        entities: [__dirname + '/../**/*.entity.js'],
        synchronize: false,
      });

      return dataSource.initialize();
    },
    inject: [ConfigService],
  },
];

export const dataSource = new DataSource({
  type: 'postgres',
  host: process.env.DATABASE_HOST,
  port: +process.env.DATABASE_PORT,
  username: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  entities: [__dirname + '/../**/*.entity.js'],
  migrations: [
    CreateUsersTable1689293814345,
    CreateShoppingCarts1689293835557,
    CreateProductsShoppingCarts1689293849337,
  ],
  synchronize: false,
});
