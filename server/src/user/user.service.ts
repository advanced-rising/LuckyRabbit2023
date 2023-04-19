import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/auth/user.entity';
import { Pack } from 'src/packs/pack.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async me(user: User): Promise<Partial<User>> {
    const dto = await this.usersRepository.findOne({
      where: { id: user.id },
      relations: ['packs'],
    });

    if (!dto) {
      throw new NotFoundException(`User with ID "${user.id}" not found`);
    }

    const totalCost = dto.packs.reduce((acc: number, pack: Pack) => {
      return acc + pack.cost;
    }, 0);

    return {
      username: dto.username,
      email: dto.email,
      id: dto.id,
      totalCost: totalCost,
    };
  }
}
