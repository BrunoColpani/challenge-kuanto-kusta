import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ShoppingCarts } from '../ShoppingCarts/shopping-cart.entity';

@Index('products_pkey', ['productId'], { unique: true })
@Entity('products', { schema: 'public' })
export class Products {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column('integer', { name: 'product_id' })
  productId: number;

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
