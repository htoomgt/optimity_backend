import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HomeModule } from './home/home.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [HomeModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
