/**
 * @description User service interface
 * Contains function for user service
 */
export interface UserServiceInterface {
  createUser(): Promise<string>;
}