import { Image } from './image.entity';

export class User {
  id: number;
  email: string;
  createdAt: string;
  images?: Image[];
}
