import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ImagesService } from './images.service';
import { CreateImageDto } from './dto/create-image.dto';
import { UpdateImageDto } from './dto/update-image.dto';

@Controller('images')
export class ImagesController {
  constructor(private readonly imagesService: ImagesService) {}

  @Get()
  async findAll() {
    return {
      images: await this.imagesService.findAll(),
    };
  }

  @Post()
  async create(@Body() createImageDto: CreateImageDto) {
    return {
      image: await this.imagesService.create(createImageDto),
    };
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return {
      image: await this.imagesService.findOne(+id),
    };
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateImageDto: UpdateImageDto,
  ) {
    return {
      image: await this.imagesService.update(+id, updateImageDto),
    };
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.imagesService.remove(+id);
  }
}
