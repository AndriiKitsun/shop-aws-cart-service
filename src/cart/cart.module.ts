import { Module } from '@nestjs/common';

import { OrderModule } from '../order/order.module';

import { CartController } from './cart.controller';
import { CartService } from './services';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cart, CartItem } from './models';
import { User } from '../users';

@Module({
  imports: [TypeOrmModule.forFeature([Cart, CartItem, User]), OrderModule],
  providers: [CartService],
  controllers: [CartController],
})
export class CartModule {}
