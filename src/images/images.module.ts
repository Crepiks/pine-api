import { Module } from '@nestjs/common';
import { ImagesService } from './images.service';
import { ImagesController } from './images.controller';
import { ImagesRepository } from './data/repositories/images.repository';
import { UsersRepository } from './data/repositories/users.repository';

@Module({
  controllers: [ImagesController],
  providers: [ImagesService, ImagesRepository, UsersRepository],
})
export class ImagesModule {}
