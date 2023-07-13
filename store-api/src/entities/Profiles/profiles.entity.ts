import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Users } from '../Users/user.entity';

@Index('profiles_pkey', ['id'], { unique: true })
@Entity('profiles', { schema: 'public' })
export class Profiles {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column('character varying', { name: 'profile_name' })
  profileName: string;

  @OneToMany(() => Users, (users) => users.profile)
  users: Users[];
}
