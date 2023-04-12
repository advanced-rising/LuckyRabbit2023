import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Pack } from './pack.entity';

@Injectable()
export class PackService {
  constructor(
    @InjectRepository(Pack)
    private packRepository: Repository<Pack>,
  ) {}

  async getPacks(): Promise<Pack[]> {
    const query = this.packRepository.createQueryBuilder('pack');
    const packs = await query.getMany();
    return packs;
  }
}
