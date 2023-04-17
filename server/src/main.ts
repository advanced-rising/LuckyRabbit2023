import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';

async function bootstrap() {
  const logger = new Logger();
  const app = await NestFactory.create(AppModule);

  // CORS 설정을 정의합니다.
  const corsOptions: CorsOptions = {
    origin: (origin, callback) => {
      const allowedOrigins = ['http://localhost:3000', '*'];
      if (allowedOrigins.includes(origin) || allowedOrigins.includes('*')) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,UPDATE,OPTIONS',
    credentials: true,
    allowedHeaders:
      'X-Requested-With, Access-Control-Allow-Origin, X-HTTP-Method-Override, Content-Type, Accept, Access-Control-Allow-Methods, Access-Control-Allow-Headers, Authorization', // 'Authorization' 헤더를 추가합니다.
  };

  app.enableCors(corsOptions);
  app.useGlobalPipes(new ValidationPipe());
  app.setGlobalPrefix('v1');
  const port = 3005;
  await app.listen(port);
  logger.log(`Application listening on port ${port}`);
}
bootstrap();
