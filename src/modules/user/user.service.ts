import { Injectable } from '@nestjs/common';
import { UserServiceInterface } from './interfaces/user-service.interface';
import { UserRepository } from './repositories/user.repository';

@Injectable()
export class UserService implements UserServiceInterface {
  /**
   * @description Database not initilize
   * Use this after registering database and entity
   */
  // constructor(
  //   private  readonly userRespository: UserRepository
  // ) {}
  
  getUser(): string {
    return "Success";
  }

}
