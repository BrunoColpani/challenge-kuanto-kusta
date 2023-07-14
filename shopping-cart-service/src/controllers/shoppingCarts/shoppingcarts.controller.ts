import { Controller } from '@nestjs/common';
import { EventPattern, Payload } from '@nestjs/microservices';
import { ShoppingcartsService } from '../../services/shoppingCarts/shoppingcarts.service';
import { CreateShoppingcartDto } from '../../services/shoppingCarts/dto/create-shoppingcart.dto';
import { CreateProductsCartDto } from 'src/services/productsShoppingCart/dto/create-products-cart.dto';

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

  @EventPattern('proudct-shopping-cart-add')
  addProductCart(
    @Payload() createProductShoppingcartDto: CreateProductsCartDto,
  ) {
    return this.shoppingcartsService.addProductCart(
      createProductShoppingcartDto,
    );
  }

  @EventPattern('proudct-shopping-cart-delete')
  removeProductCart(@Payload() id: number) {
    return this.shoppingcartsService.removeProductCart(id);
  }
}
