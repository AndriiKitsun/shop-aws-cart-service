import { Injectable } from '@nestjs/common';

import { v4 } from 'uuid';

import { Cart } from '../models';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CartStatus } from '../enums';

@Injectable()
export class CartService {
  constructor(
    @InjectRepository(Cart)
    private cartRepository: Repository<Cart>,
  ) {}

  findByUserId(userId: string): Promise<Cart> {
    return this.cartRepository.findOne({
      where: { userId },
      relations: ['items'],
    });
  }

  async createByUserId(userId: string): Promise<Cart> {
    const id = v4();
    const userCart: Cart = {
      id,
      userId,
      createdAt: new Date().toJSON(),
      updatedAt: new Date().toJSON(),
      status: CartStatus.Open,
      items: [],
    };

    const cart = this.cartRepository.create(userCart);
    await this.cartRepository.insert(cart);

    return userCart;
  }

  async findOrCreateByUserId(userId: string): Promise<Cart> {
    const userCart = await this.findByUserId(userId);

    if (userCart) {
      return userCart;
    }

    return this.createByUserId(userId);
  }

  async updateByUserId(userId: string, { items }: Cart): Promise<Cart> {
    const { id, ...rest } = await this.findOrCreateByUserId(userId);

    const updatedCart = {
      id,
      ...rest,
      items: [...items],
    };

    await this.cartRepository.save(updatedCart);

    return { ...updatedCart };
  }

  async removeByUserId(userId: string): Promise<void> {
    await this.cartRepository.delete({ userId });
  }
}
