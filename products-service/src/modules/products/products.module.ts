import { Module } from '@nestjs/common';
import { ProductsService } from '../../services/products/products.service';
import { ProductsController } from '../../controllers/products/products.controller';
import { DatabaseModule } from 'src/database/database.module';
import { productsProviders } from 'src/schemas/products/products.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [ProductsController],
  providers: [ProductsService, ...productsProviders],
})
export class ProductsModule {}
