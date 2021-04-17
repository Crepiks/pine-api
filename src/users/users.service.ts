import { ConflictException, Injectable } from '@nestjs/common';
import { UsersRepository } from './data/repositories/users.repository';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(private readonly usersRepository: UsersRepository) {}

  findAll(): Promise<User[]> {
    return this.usersRepository.getUsers();
  }

  async create(payload: CreateUserDto): Promise<User> {
    const user = await this.usersRepository.findByEmail(payload.email);
    if (user) {
      throw new ConflictException('User already exists');
    }
    return this.usersRepository.insertAndFetch(payload);
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
