import { Injectable } from '@nestjs/common';
import { User } from 'src/images/entities/user.entity';
import { UserModel } from '../models/user.model';

@Injectable()
export class UsersRepository {
  findById(id: number): Promise<User> {
    return UserModel.query().findById(id);
  }
}
