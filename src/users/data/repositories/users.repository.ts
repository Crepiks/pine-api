import { Injectable } from '@nestjs/common';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { User } from 'src/users/entities/user.entity';
import { UserModel } from '../models/user.model';

@Injectable()
export class UsersRepository {
  getUsers(): Promise<User[]> {
    return UserModel.query().orderBy('createdAt', 'desc');
  }

  insertAndFetch(payload: CreateUserDto): Promise<User> {
    return UserModel.query().insertAndFetch(payload);
  }

  findByEmail(email: string): Promise<User> {
    return UserModel.query().findOne({ email });
  }
}
