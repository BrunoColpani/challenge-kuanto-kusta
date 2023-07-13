import { Module } from '@nestjs/common';
import { ProductsController } from '../../controllers/Products/products.controller';
import { DatabaseModule } from 'src/database/database.module';
import { productsProviders } from 'src/entities/Products/products.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [ProductsController],
  providers: [...productsProviders],
})
export class ProductsModule {}
