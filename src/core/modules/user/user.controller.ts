import { Body, Controller, Inject, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from '@prisma/client';
import { IUserService } from 'src/core/interfaces/user.service.interface';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(
    @Inject(UserService)
    private readonly _service: IUserService
  ) {}


  @Post()
  async createUser(@Body() dto: CreateUserDto): Promise<User> {
    return this._service.createUser(dto);
  }
}
