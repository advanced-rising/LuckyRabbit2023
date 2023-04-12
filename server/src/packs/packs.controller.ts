import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Pack } from './pack.entity';
import { PackService } from './packs.service';

@Controller('packs')
@UseGuards(AuthGuard('jwt'))
export class PackController {
  constructor(private packsService: PackService) {}
  @Get()
  getPacks(): Promise<Pack[]> {
    return this.packsService.getPacks();
  }
}
