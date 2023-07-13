import {
  ConflictException,
  Inject,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Model } from 'mongoose';
import { Product } from './interfaces/products.interface';

@Injectable()
export class ProductsService {
  constructor(
    @Inject('PRODUCT_MODEL')
    private readonly _productModel: Model<Product>,
  ) {}
  async create(createProductDto: CreateProductDto) {
    try {
      const productExists = await this._productModel
        .find({
          productId: createProductDto.productId,
        })
        .exec();

      if (productExists.length)
        throw new ConflictException('Product id already exists');

      const product = await this._productModel.create({
        productId: createProductDto.productId,
        price: createProductDto.price,
      });

      return product;
    } catch (error) {
      return new InternalServerErrorException(error.message);
    }
  }

  async findAll() {
    try {
      const allProducts = await this._productModel.find().exec();

      const products = allProducts.map((product) => {
        return {
          productId: product.productId,
          price: product.price,
        };
      });

      return products;
    } catch (error) {
      return error.response;
    }
  }
}
