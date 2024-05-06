import { Module } from '@nestjs/common';
import { SolutionService } from './solution.service';
import { SolutionController } from './solution.controller';

@Module({
  providers: [SolutionService],
  controllers: [SolutionController]
})
export class SolutionModule {}
