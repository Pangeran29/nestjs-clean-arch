import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from 'src/modules/user/entities/user.entity';
import { BaseAbstractRepository } from 'src/core/repositores/base-abstract.repository';
import { Repository } from 'typeorm';
import { UserRepositoryInterface } from '../interfaces/user-repository.interface';

/**
 * @description Registry 
 * Registry user entity to base abstract generic repository and implement user 
 * repository interface that contains addtional database communication that the base abstract not implement yet
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
  getUserWithQuery(query: string): Promise<string> {
    return this.userRepository.query(query);
  }
  
}