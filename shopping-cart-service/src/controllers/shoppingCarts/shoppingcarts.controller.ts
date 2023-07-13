import { Controller, Get, Post, Put, Delete, Param } from '@nestjs/common';
import { EventPattern, MessagePattern, Payload } from '@nestjs/microservices';
import { ShoppingcartsService } from '../../services/shoppingCarts/shoppingcarts.service';
import { CreateShoppingcartDto } from '../../services/shoppingCarts/dto/create-shoppingcart.dto';
import { UpdateShoppingcartDto } from '../../services/shoppingCarts/dto/update-shoppingcart.dto';

@Controller('shopping-carts')
export class ShoppingcartsController {
  constructor(private readonly shoppingcartsService: ShoppingcartsService) {}

  @EventPattern('shopping-cart')
  findAll() {
    return this.shoppingcartsService.findAll();
  }

  @EventPattern('shopping-cart-by-id')
  findById(@Payload() id: number) {
    console.log('id', id);
    return this.shoppingcartsService.findById(id);
  }

  @EventPattern('shopping-cart-create')
  create(@Payload() createShoppingcartDto: CreateShoppingcartDto) {
    return this.shoppingcartsService.create(createShoppingcartDto);
  }

  @EventPattern('shopping-cart-update')
  async update(@Payload() message: any) {
    const { shoppingCartId, ...body } = message;
    await this.shoppingcartsService.update(shoppingCartId, body);
  }

  @EventPattern('shopping-cart-delete')
  remove(@Payload() id: number) {
    return this.shoppingcartsService.remove(id);
  }
}
