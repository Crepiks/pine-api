import { Injectable } from '@nestjs/common';
import { ImagesRepository } from './data/repositories/images.repository';
import { CreateImageDto } from './dto/create-image.dto';
import { UpdateImageDto } from './dto/update-image.dto';
import { Image } from './entities/image.entity';

@Injectable()
export class ImagesService {
  constructor(private readonly imagesRepository: ImagesRepository) {}

  findAll(): Promise<Image[]> {
    return this.imagesRepository.getImages();
  }

  create(createImageDto: CreateImageDto) {
    return 'This action adds a new image';
  }

  findOne(id: number) {
    return `This action returns a #${id} image`;
  }

  update(id: number, updateImageDto: UpdateImageDto) {
    return `This action updates a #${id} image`;
  }

  remove(id: number) {
    return `This action removes a #${id} image`;
  }
}
