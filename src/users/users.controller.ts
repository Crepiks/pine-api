import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  async findAll() {
    return {
      users: await this.usersService.findAll(),
    };
  }

  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    return {
      user: await this.usersService.create(createUserDto),
    };
  }

  @Get(':email')
  async findOne(@Param('email') email: string) {
    return {
      user: await this.usersService.findOne(email),
    };
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return {
      user: await this.usersService.update(+id, updateUserDto),
    };
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}
