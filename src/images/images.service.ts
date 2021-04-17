import { Injectable, NotFoundException } from '@nestjs/common';
import { UsersRepository } from 'src/users/data/repositories/users.repository';
import { ImagesRepository } from './data/repositories/images.repository';
import { CreateImageDto } from './dto/create-image.dto';
import { UpdateImageDto } from './dto/update-image.dto';
import { Image } from './entities/image.entity';

@Injectable()
export class ImagesService {
  constructor(
    private readonly imagesRepository: ImagesRepository,
    private readonly usersRepository: UsersRepository,
  ) {}

  findAll(): Promise<Image[]> {
    return this.imagesRepository.getImages();
  }

  async create(payload: CreateImageDto): Promise<Image> {
    const user = await this.usersRepository.findById(payload.userId);

    if (!user) {
      throw new NotFoundException('User not found');
    }

    return this.imagesRepository.insertAndFetchImage(payload);
  }

  async findOne(id: number): Promise<Image> {
    const image = await this.imagesRepository.findById(id);
    if (!image) {
      throw new NotFoundException('Image not found');
    }

    return image;
  }

  async update(id: number, payload: UpdateImageDto) {
    const image = await this.imagesRepository.patchAndFetchById(id, payload);
    if (!image) {
      throw new NotFoundException('Image not found');
    }

    return image;
  }

  async remove(id: number) {
    const rowsDeleted = await this.imagesRepository.deleteById(id);
    if (!rowsDeleted) {
      throw new NotFoundException('Image not found');
    }
  }
}
