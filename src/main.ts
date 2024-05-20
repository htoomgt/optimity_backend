import 'reflect-metadata';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MetadataScanner } from '@nestjs/core/metadata-scanner';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    // true for all origins
    origin: [
      "https://optimity-react-public-side.vercel.app",
      "http://optimity.htoomaungthait.xyz",
      "https://optimity.htoomaungthait.xyz",
      "http://localhost:5173",
      "http://optimitycomm.com",
      "http://www.optimitycomm.com"
    ],
    // origin: "*",
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    allowedHeaders: 'Content-Type, Accept',
    credentials: true,
  });
  await app.listen(5000);
}
bootstrap();
