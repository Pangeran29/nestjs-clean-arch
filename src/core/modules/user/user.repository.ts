import { Injectable } from '@nestjs/common';
import { Prisma, User } from '@prisma/client';
import { IUserRepository } from 'src/core/interfaces/user.repository.interface';
import { BaseRepository } from 'src/infra/repositories/base-abstract.repository';

@Injectable()
export class UserRepository extends BaseRepository<User> implements IUserRepository {
  constructor() {
    super('User');
  }

  async createUser(data: Prisma.UserCreateArgs): Promise<User> {
    return await this.create(data);
  }
}
