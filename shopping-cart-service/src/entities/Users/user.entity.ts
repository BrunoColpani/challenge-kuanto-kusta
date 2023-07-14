import { ShoppingCarts } from '../ShoppingCarts/shopping-cart.entity';
import {
  Column,
  Entity,
  Index,
  PrimaryGeneratedColumn,
  OneToMany,
} from 'typeorm';

@Index('users_email_key', ['email'], { unique: true })
@Index('users_pkey', ['id'], { unique: true })
@Entity('users', { schema: 'public' })
export class Users {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column('character varying', { name: 'user_name', nullable: true })
  userName: string;

  @Column('character varying', { name: 'email', nullable: true, unique: true })
  email: string;

  @Column('character varying', { name: 'password', nullable: true })
  password: string;

  @OneToMany(() => ShoppingCarts, (shoppingCarts) => shoppingCarts.user)
  shoppingCarts: ShoppingCarts[];
}
