import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class HomeService {

  constructor(private readonly prisma: PrismaService) {}

    async getWelcomeInfo(){
        return await this.prisma.homeData.findMany();
    }
}
