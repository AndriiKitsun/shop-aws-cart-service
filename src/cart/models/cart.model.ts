import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  Relation,
} from 'typeorm';
import { CartStatus } from '../enums';
import { CartItem } from './cart-item.model';

@Entity()
export class Cart {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('uuid', { name: 'user_id' })
  userId: string;

  @Column('date', { name: 'created_at' })
  createdAt: string;

  @Column('date', { name: 'updated_at' })
  updatedAt: string;

  @Column('enum', { enum: CartStatus })
  status: CartStatus;

  @OneToMany(() => CartItem, (cartItem) => cartItem.cart, { cascade: true })
  items: Relation<CartItem[]>;
}
