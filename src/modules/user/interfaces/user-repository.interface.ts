import { UserEntity } from "src/modules/user/entities/user.entity";
import { BaseRepositoryInterface } from "src/core/repositores/base-interface.repository";

/**
 * @description User Repository Interface
 * Interface that extends the default TypeOrm function in base repository interface
 * We can add new Typeorm funtion for user service 
 * @example getUserWithQuery(query: string): Promise<string>; 
 */
export interface UserRepositoryInterface extends BaseRepositoryInterface<UserEntity> {
  getUserWithQuery(query: string): Promise<string>;
}