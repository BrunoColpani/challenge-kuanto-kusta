import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ShoppingCarts } from '../ShoppingCarts/shopping-cart.entity';

@Index('products_shopping_carts_pkey', ['productId'], { unique: true })
@Entity('products_shopping_carts', { schema: 'public' })
export class ProductsShoppingCart {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column('character varying', { name: 'product_id', length: 24 })
  productId: string;

  @Column('integer', { name: 'shopping_cart_id' })
  shoppingCartId: number;

  @Column('numeric', { name: 'price', precision: 10, scale: 2 })
  price: string;

  @Column('integer', { name: 'quantity' })
  quantity: number;

  @ManyToOne(() => ShoppingCarts, (shoppingCarts) => shoppingCarts.products)
  @JoinColumn([
    { name: 'shopping_cart_id', referencedColumnName: 'shoppingCartId' },
  ])
  shoppingCart: ShoppingCarts;
}
