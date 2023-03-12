import { UserEntity } from "src/core/entities/user.entity";
import { BaseRepositoryInterface } from "src/core/repositores/base-interface.repository";

/**
 * @description Registry
 * Registry user entity to base repository interface
 */
export interface UserRepositoryInterface extends BaseRepositoryInterface<UserEntity> {}