import { Injectable } from '@nestjs/common';
import { Image } from 'src/images/entities/image.entity';
import { ImageModel } from '../models/image.model';

@Injectable()
export class ImagesRepository {
  getImages(): Promise<Image[]> {
    return ImageModel.query()
      .orderBy('createdAt', 'asc')
      .withGraphFetched('user');
  }
}
