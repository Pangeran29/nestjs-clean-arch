import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from 'src/core/entities/user.entity';
import { BaseAbstractRepository } from 'src/core/repositores/base-abstract.repository';
import { Repository } from 'typeorm';
import { UserRepositoryInterface } from './user-interface.repository';

/**
 * @description User Repository Provider
 * Making user repository that extends function from base abstract repository
 */
@Injectable()
export class UserRepository extends BaseAbstractRepository<UserEntity> implements UserRepositoryInterface
{
  constructor(    
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {
    super(userRepository);
  }
  
  /**
   * @description Push Notification
   * Function that is not in Base abstract
   */
  getUserWithQuery() {
    return this.userRepository.query("");
  }  
}