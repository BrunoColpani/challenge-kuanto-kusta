import {
  Column,
  Entity,
  Index,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
  OneToMany,
} from 'typeorm';
import { Users } from 'src/entities/Users/user.entity';
//import { Products } from '../Products/products.entity';

@Index('shopping_carts_pkey', ['shoppingCartId'], { unique: true })
@Entity('shopping_carts', { schema: 'public' })
export class ShoppingCarts {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'shopping_cart_id' })
  shoppingCartId: number;

  @Column('integer', { name: 'user_id' })
  userId: number;

  @Column('numeric', { name: 'total_price', precision: 10, scale: 2 })
  totalPrice: number;

  @Column('integer', { name: 'total_quantity' })
  totalQuantity: number;

  @ManyToOne(() => Users, (users) => users.shoppingCarts)
  @JoinColumn([{ name: 'user_id', referencedColumnName: 'id' }])
  user: Users;

  //   @OneToMany(() => Products, (Products) => Products.shoppingCart)
  //   products: Products[];
}
