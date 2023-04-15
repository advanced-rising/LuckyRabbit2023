import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/auth/user.entity';
import { Repository } from 'typeorm';
import { CreatePackDto } from './dto/create-pack.dto';
import { Pack } from './pack.entity';

@Injectable()
export class PackService {
  constructor(
    @InjectRepository(Pack)
    private packRepository: Repository<Pack>,
  ) {}

  async getPacks(user: User): Promise<Pack[]> {
    const query = this.packRepository
      .createQueryBuilder('pack')
      .where('pack.userId = :userId', { userId: user.id });
    const packs = await query.getMany();
    return packs;
  }

  async getPack(id: string): Promise<Pack> {
    const pack = await this.packRepository.findOne({ where: { id } });

    if (!pack) {
      throw new NotFoundException(`Pack with ID "${id}" not found`);
    }

    return pack;
  }

  async createPack(createPackDto: CreatePackDto, user: User): Promise<Pack> {
    const { cost, color, someone, comment } = createPackDto;
    const pack = this.packRepository.create({
      // user: { userId: user.id, username: user.username },
      userId: user.id,
      cost,
      color,
      someone,
      comment,
      isRead: 0,
    });

    await this.packRepository.save(pack);
    return pack;
  }

  async readPack(id: string): Promise<Pack> {
    const pack = await this.packRepository.findOne({ where: { id } });

    if (!pack) {
      throw new NotFoundException(`Pack with ID "${id}" not found`);
    }

    pack.isRead = 1;
    await this.packRepository.save(pack);
    return;
  }

  async deletePack(id: string): Promise<void> {
    const result = await this.packRepository.delete({ id });

    if (result.affected === 0) {
      throw new NotFoundException(`Pack with ID "${id}" not found`);
    }
  }
}
