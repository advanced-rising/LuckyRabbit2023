import { Module } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { PackModule } from './packs/packs.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'luckyrabbit',
      autoLoadEntities: true,
      synchronize: true,
      entities: ['src/entity/**/*.ts'],
    }),
    AuthModule,
    PackModule,
  ],
})
export class AppModule {}
