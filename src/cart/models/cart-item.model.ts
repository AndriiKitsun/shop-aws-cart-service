import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  Relation,
} from 'typeorm';
import { Cart } from './cart.model';
import { Product } from './product.model';

@Entity()
export class CartItem {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column('uuid', { name: 'cart_id' })
  cartId: string;

  @Column('uuid')
  product_id: string;

  @Column('int')
  count: number;

  @ManyToOne(() => Cart, (cart) => cart.items)
  @JoinColumn({ name: 'cart_id' })
  cart: Relation<Cart>;

  product: Product;
}
