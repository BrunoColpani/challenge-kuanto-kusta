import {
  ConflictException,
  Inject,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateShoppingcartDto } from './dto/create-shoppingcart.dto';
import { UpdateShoppingcartDto } from './dto/update-shoppingcart.dto';
import { Repository } from 'typeorm';
import { ShoppingCarts } from 'src/entities/ShoppingCarts/shopping-cart.entity';
import { ProductsShoppingCart } from 'src/entities/ProductsShoppingcart/products-shopping-cart.entity';
import { CreateProductsCartDto } from '../productsShoppingCart/dto/create-products-cart.dto';
import { UpdateProductsCartDto } from '../productsShoppingCart/dto/update-products-cart.dto';

@Injectable()
export class ShoppingcartsService {
  constructor(
    @Inject('SHOPPINGCARTS_REPOSITORY')
    private readonly _shoppingcartsServiceRepository: Repository<ShoppingCarts>,
    @Inject('PRODUCTS_SHOPPING_CART_REPOSITORY')
    private readonly _productsShoppingCartServiceRepository: Repository<ProductsShoppingCart>,
  ) {}

  async findAll() {
    return this._shoppingcartsServiceRepository.find({
      relations: ['products'],
    });
  }

  async findById(id: number) {
    try {
      const shoppingCart = await this._shoppingcartsServiceRepository.findOne({
        where: { shoppingCartId: id },
        relations: ['products'],
      });

      if (!shoppingCart) {
        throw new NotFoundException(`Shopping Cart ID ${id} not found`);
      }
      return shoppingCart;
    } catch (error) {
      return error.response;
    }
  }

  async verifyShoppingCartExists(userId: number): Promise<void> {
    const shoppingCart = await this._shoppingcartsServiceRepository.findOne({
      where: { userId },
    });

    if (shoppingCart) {
      throw new ConflictException(
        'A shopping cart already exists for this user.',
      );
    }
  }

  async create(createShoppingcartDto: CreateShoppingcartDto) {
    try {
      await this.verifyShoppingCartExists(createShoppingcartDto.userId);

      const totalPrice = 0;
      const totalQuantity = 0;

      const newShoppingCart = this._shoppingcartsServiceRepository.create({
        totalPrice,
        totalQuantity,
        userId: createShoppingcartDto.userId,
      });

      const shoppingCart = await this._shoppingcartsServiceRepository.save(
        newShoppingCart,
      );

      return shoppingCart;
    } catch (error) {
      console.log(error);
      return error.response;
    }
  }

  async update(id: number, updateShoppingcartDto: UpdateShoppingcartDto) {
    try {
      const shoppingCart = await this.findById(id);

      const shoppingCartUpdate =
        await this._shoppingcartsServiceRepository.preload({
          shoppingCartId: id,
          ...updateShoppingcartDto,
        });

      if (!shoppingCart) {
        throw new NotFoundException(`Shopping Cart ID ${id} not found`);
      }

      return await this._shoppingcartsServiceRepository.save(
        shoppingCartUpdate,
      );
    } catch (error) {
      error.response;
    }
  }

  async remove(id: number) {
    try {
      const shoppingCart = await this._shoppingcartsServiceRepository.findOne({
        where: { shoppingCartId: id, isOpen: true },
      });

      if (!shoppingCart) {
        throw new NotFoundException(`Shopping Cart ID ${id} not found`);
      }

      return this._shoppingcartsServiceRepository.remove(shoppingCart);
    } catch (error) {
      error.response;
    }
  }

  async addProductCart(createproductCartDto: CreateProductsCartDto) {
    try {
      const productCartBody = await this._validateProductExists(
        createproductCartDto,
      );

      const productCart =
        await this._productsShoppingCartServiceRepository.save(productCartBody);

      await this.updateCartTotals(productCart.shoppingCartId);

      return productCart;
    } catch (error) {
      console.log(error);
      return error.response;
    }
  }

  async removeProductCart(id: number) {
    const productCart =
      await this._productsShoppingCartServiceRepository.findOne({
        where: { id },
      });

    if (!productCart) {
      throw new NotFoundException(`Product Cart ID ${id} not found`);
    }

    const removeProductCart =
      await this._productsShoppingCartServiceRepository.remove(productCart);
    await this.updateCartTotals(productCart.shoppingCartId);

    return removeProductCart;
  }

  async updateCartTotals(shoppingCartId: number) {
    const productsCartByShoppingCartId =
      await this._productsShoppingCartServiceRepository.find({
        where: { shoppingCartId },
      });

    let totalPrice = 0;
    let totalQuantity = 0;
    if (productsCartByShoppingCartId.length) {
      totalPrice = this._calculateTotalPrice(productsCartByShoppingCartId);
      totalQuantity = this._calculateTotalQuantity(
        productsCartByShoppingCartId,
      );
    }

    await this._shoppingcartsServiceRepository.update(shoppingCartId, {
      totalPrice,
      totalQuantity,
    });
  }

  private async _validateProductExists(product: UpdateProductsCartDto) {
    const { productId, shoppingCartId } = product;
    const existingProductCart =
      await this._productsShoppingCartServiceRepository.findOne({
        where: { productId, shoppingCartId },
      });
    if (existingProductCart) {
      existingProductCart.quantity += product.quantity;
      existingProductCart.price = product.price;

      return existingProductCart;
    } else {
      const productCart =
        await this._productsShoppingCartServiceRepository.create(product);
      return productCart;
    }
  }

  private _calculateTotalPrice(products: ProductsShoppingCart[]): number {
    return products.reduce(
      (total, product) => total + Number(product.price) * product.quantity,
      0,
    );
  }

  private _calculateTotalQuantity(products: ProductsShoppingCart[]): number {
    return products.reduce((total, product) => total + product.quantity, 0);
  }
}
