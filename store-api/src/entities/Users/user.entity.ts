import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ShoppingCarts } from '../ShoppingCarts/shopping-cart.entity';
import { Profiles } from '../Profiles/profiles.entity';

@Index('users_email_key', ['email'], { unique: true })
@Index('users_pkey', ['id'], { unique: true })
@Entity('users', { schema: 'public' })
export class Users {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column('character varying', { name: 'user_name' })
  userName: string;

  @Column('character varying', { name: 'email', unique: true })
  email: string;

  @Column('character varying', { name: 'password' })
  password: string;

  @Column('integer', { name: 'profile_id' })
  profileId: number;

  @OneToMany(() => ShoppingCarts, (shoppingCarts) => shoppingCarts.user)
  shoppingCarts: ShoppingCarts[];

  @ManyToOne(() => Profiles, (profiles) => profiles.users)
  @JoinColumn([{ name: 'profile_id', referencedColumnName: 'id' }])
  profile: Profiles;
}
