import { Module } from '@nestjs/common';
import { ProductsService } from '../../services/products/products.service';
import { ProductsController } from '../../controllers/products/products.controller';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [ProductsController],
  providers: [ProductsService],
})
export class ProductsModule {}
