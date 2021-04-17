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
