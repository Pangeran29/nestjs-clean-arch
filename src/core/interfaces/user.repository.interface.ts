import { Prisma, User } from "@prisma/client";
import { IBaseRepository } from "src/infra/interfaces/base-abstract.interface";

export interface IUserRepository extends IBaseRepository<User> {
  createUser(data: Prisma.UserCreateArgs): Promise<User|null>;
};