import { Module } from '@nestjs/common';
import { PackService } from './pack.service';
import { PackController } from './pack.controller';

@Module({
  providers: [PackService],
  controllers: [PackController],
})
export class PackModule {}
