import { Injectable } from '@nestjs/common';
import { User } from 'src/users/entities/user.entity';
import { UserModel } from '../models/user.model';

@Injectable()
export class UsersRepository {
  getUsers(): Promise<User[]> {
    return UserModel.query().orderBy('createdAt', 'desc');
  }
}
