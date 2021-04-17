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

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return {
      user: await this.usersService.findOne(+id),
    };
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}
