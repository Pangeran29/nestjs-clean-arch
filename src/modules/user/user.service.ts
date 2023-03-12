import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { UserEntity } from 'src/core/entities/user.entity';
import { UserServiceInterface } from './interfaces/user-service.interface';
import { UserRepository } from './repositories/user.repository';

@Injectable()
export class UserService implements UserServiceInterface {
  constructor(
    private readonly userRespository: UserRepository
  ) {}
  
  async createUser(): Promise<string> {
    const newUser = new UserEntity();
    newUser.firstName = 'prince';
    newUser.lastName = 'jo';

    try {
      // save new user
      await this.userRespository.save(newUser);

      return `success to create new user: ${newUser.firstName} ${newUser.lastName}`
    } catch (error) {      
      throw new InternalServerErrorException(error);
    }
  }

}
