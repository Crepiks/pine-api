import { Injectable } from '@nestjs/common';
import { CreateImageDto } from 'src/images/dto/create-image.dto';
import { Image } from 'src/images/entities/image.entity';
import { ImageModel } from '../models/image.model';

@Injectable()
export class ImagesRepository {
  getImages(): Promise<Image[]> {
    return ImageModel.query()
      .orderBy('createdAt', 'asc')
      .withGraphFetched('user');
  }

  insertAndFetchImage(payload: CreateImageDto): Promise<Image> {
    return ImageModel.query().insertAndFetch(payload);
  }

  findById(id: number): Promise<Image> {
    return ImageModel.query().findById(id).withGraphFetched('user');
  }
}
