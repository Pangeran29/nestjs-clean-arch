import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { UserEntity } from 'src/modules/user/entities/user.entity';
import { CreateUserDto } from './dtos/create-user.dto';
import { UserServiceInterface } from './interfaces/user-service.interface';
import { UserRepository } from './repositories/user.repository';

/**
 * @description User Service
 * User Service is concrete class that implement user service interface 
 */
@Injectable()
export class UserService implements UserServiceInterface {
  constructor(
    private readonly userRespository: UserRepository
  ) {}
  
  async createUser(createUserDto: CreateUserDto): Promise<string> {
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
