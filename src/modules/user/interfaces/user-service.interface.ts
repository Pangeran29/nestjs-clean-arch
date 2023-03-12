import { CreateUserDto } from "../dtos/create-user.dto";

/**
 * @description User service interface
 * Interface that specify all funtion that user service need to implement
 */
export interface UserServiceInterface {
  createUser(createUserDto: CreateUserDto): Promise<string>;
}