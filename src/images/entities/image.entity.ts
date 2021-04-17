import { User } from './user.entity';

export class Image {
  id: number;
  path: string;
  userId: number;
  lat?: number;
  lon?: number;
  city?: string;
  deviceModel?: string;
  createdAt?: string;
  user?: User;
}
