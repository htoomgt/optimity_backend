import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HomeModule } from './home/home.module';
import { PrismaModule } from './prisma/prisma.module';
import { ServiceModule } from './service/service.module';

@Module({
  imports: [HomeModule, PrismaModule, ServiceModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
