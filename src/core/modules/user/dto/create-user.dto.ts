import { User } from "@prisma/client";

export class CreateUserDto implements Partial<User> {
  name: string;
  phoneNumber: string;
  occupation: string;
  email: string;
  password: string;
  archived: boolean;
}