import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HomeModule } from './home/home.module';
import { PrismaModule } from './prisma/prisma.module';
import { ServiceModule } from './service/service.module';
import { AboutModule } from './about/about.module';
import { SolutionModule } from './solution/solution.module';
import { NewsModule } from './news/news.module';
import { VacancyService } from './vacancy/vacancy.service';
import { VacancyModule } from './vacancy/vacancy.module';

@Module({
  imports: [HomeModule, PrismaModule, ServiceModule, AboutModule, SolutionModule, NewsModule, VacancyModule],
  controllers: [AppController],
  providers: [AppService, VacancyService],
})
export class AppModule {}
