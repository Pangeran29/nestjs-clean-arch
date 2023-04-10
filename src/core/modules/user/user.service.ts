import { Inject, Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { IUserService } from 'src/core/interfaces/user.service.interface';
import { CreateUserDto } from './dto/create-user.dto';
import { UserRepository } from './user.repository';
import { IUserRepository } from 'src/core/interfaces/user.repository.interface';

@Injectable()
export class UserService implements IUserService {
  constructor(
    @Inject(UserRepository)
    private readonly _repo: IUserRepository
  ) {}

  async createUser(dto: CreateUserDto): Promise<User> {
    const createUser = this._repo.createUser({
      data: {
        ...dto
      }
    });
    return createUser;
  }
}
