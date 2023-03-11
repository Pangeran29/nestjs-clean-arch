import { UserEntity } from "src/core/entities/user.entity";
import { BaseRepositoryInterface } from "src/core/repositores/base-interface.repository";

/**
 * @description Registry
 * Make new user repository by extend base repository interface and specify user entity
 */
export interface UserRepositoryInterface extends BaseRepositoryInterface<UserEntity> {}