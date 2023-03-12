import { Controller, Post } from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(
    private readonly userService: UserService,
  ) {}

  @Post()
  createUser(createUserDto: CreateUserDto) {
    const msg = this.userService.createUser(createUserDto);
    return msg;
  }
  
}
