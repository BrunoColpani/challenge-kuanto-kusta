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

@Injectable()
export class ShoppingcartsService {
  constructor(
    @Inject('SHOPPINGCARTS_REPOSITORY')
    private readonly _shoppingcartsServiceRepository: Repository<ShoppingCarts>,
  ) {}

  async findAll() {
    return await this._shoppingcartsServiceRepository.find({
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
}
