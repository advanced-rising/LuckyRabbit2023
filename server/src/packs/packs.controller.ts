import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from 'src/auth/get-user.decorator';
import { User } from 'src/auth/user.entity';

import { CreatePackDto } from './dto/create-pack.dto';
import { Pack } from './pack.entity';
import { PackService } from './packs.service';

@Controller('packs')
@UseGuards(AuthGuard('jwt'))
export class PackController {
  constructor(private packsService: PackService) {}
  @Get()
  getPacks(@GetUser() user: User): Promise<Pack[]> {
    return this.packsService.getPacks(user);
  }
  @Get(':id')
  getPack(@Param('id') id: string): Promise<Pack> {
    return this.packsService.getPack(id);
  }

  @Post()
  createPack(
    @Body() createPackDto: CreatePackDto,
    @GetUser() user: User,
  ): Promise<Pack> {
    return this.packsService.createPack(createPackDto, user);
  }

  @Put(':id/read')
  readPack(@Param('id') id: string): Promise<Pack> {
    return this.packsService.readPack(id);
  }

  @Delete(':id')
  deletePack(@Param('id') id: string): Promise<void> {
    return this.packsService.deletePack(id);
  }
}
