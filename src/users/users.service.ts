import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
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

  async findOne(id: number): Promise<User> {
    const user = await this.usersRepository.findById(id);
    if (!user) {
      throw new NotFoundException('User not found');
    }

    return user;
  }

  async update(id: number, payload: UpdateUserDto): Promise<User> {
    const user = await this.usersRepository.patchAndFetchById(id, payload);
    if (!user) {
      throw new NotFoundException('User not found');
    }

    return user;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
