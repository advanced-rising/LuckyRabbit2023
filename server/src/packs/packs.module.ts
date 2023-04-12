import { Module } from '@nestjs/common';
import { PackService } from './packs.service';
import { PackController } from './packs.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pack } from './pack.entity';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [TypeOrmModule.forFeature([Pack]), AuthModule],
  providers: [PackService],
  controllers: [PackController],
})
export class PackModule {}
