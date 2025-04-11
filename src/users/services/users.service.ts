import { Injectable } from '@nestjs/common';

import { v4 } from 'uuid';

import { User } from '../models';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  findOne(userId: string): Promise<User> {
    return this.usersRepository.findOneBy({ id: userId });
  }

  async createOne({ name, password }: User): Promise<User> {
    const id = v4();
    const newUser = { id: name || id, name, password };

    await this.usersRepository.insert(newUser);

    return newUser;
  }
}
