import { User } from "@prisma/client";
import { CreateUserDto } from "../modules/user/dto/create-user.dto";

export interface IUserService {
  createUser(dto: CreateUserDto): Promise<User>;
}