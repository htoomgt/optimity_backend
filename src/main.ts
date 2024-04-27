import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {cors: true});
  app.enableCors({
    // true for all origins
    // origin: ["http://localhost:5173", "https://optimity-react-public-side.vercel.app"],
    origin: "*",
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
    allowedHeaders: "*",    
    credentials: true,
  });
  await app.listen(5000);
}
bootstrap();
