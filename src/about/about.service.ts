import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AboutService {
  private logger = new Logger(AboutService.name);

  constructor(private prisma: PrismaService) { }

  async getAboutMainContentFromDb() {
    try {
      const content = await this.prisma.about.findMany({
        where: { id: 1 }
      })
      return content;
    } catch (error) {
      this.logger.error(error);
      return error;
    }
  }

  async getVisionMissionFromDb() {
    try {
      const contnet = await this.prisma.vismis.findMany();
      return contnet;
    } catch (error) {
      this.logger.error(error);
      return error;
    }
  }

  async getCoreValuesFromDb() {
    try {
      const content = await this.prisma.coreVal.findMany();
      return content;
    } catch (error) {
      this.logger.error(error);
      return error;
    }
  }
}
