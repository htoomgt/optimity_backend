import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {cors: true});
  app.enableCors({
    // true for all origins
    origin: '*',
    methods: ['GET', 'POST'],
    credentials: false,
  });
  await app.listen(5000);
}
bootstrap();
