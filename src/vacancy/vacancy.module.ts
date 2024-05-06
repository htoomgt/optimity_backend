import { Module } from '@nestjs/common';
import { VacancyController } from './vacancy.controller';
import { VacancyService } from './vacancy.service';

@Module({
  providers : [VacancyService],
  controllers: [VacancyController]
})
export class VacancyModule {}
