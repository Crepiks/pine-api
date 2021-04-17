import { Injectable } from '@nestjs/common';
import { CreateImageDto } from 'src/images/dto/create-image.dto';
import { UpdateImageDto } from 'src/images/dto/update-image.dto';
import { Image } from 'src/images/entities/image.entity';
import { ImageModel } from '../models/image.model';

@Injectable()
export class ImagesRepository {
  async getImages(userId?: number): Promise<Image[]> {
    if (userId) {
      return ImageModel.query()
        .where({ userId })
        .orderBy('createdAt', 'asc')
        .withGraphFetched('user');
    }
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

  patchAndFetchById(id: number, payload: UpdateImageDto): Promise<Image> {
    return ImageModel.query().patchAndFetchById(id, payload);
  }

  deleteById(id: number): Promise<number> {
    return ImageModel.query().deleteById(id);
  }
}
