import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class NewsService {

    private logger = new Logger(NewsService.name);

    constructor(private prisma: PrismaService) { }

    async getNewsFromDb() {
        try {
            const news = await this.prisma.news.findMany({
                orderBy: { id: "asc" }
            });

            return news;
        } catch (error) {
            this.logger.error(error);
            return error;
        }
    }


    async getNewsByIdDb(id) {
        const numId = parseInt(id);
        try {
            const news = await this.prisma.news.findFirstOrThrow({
                where: { id: numId }
            })

            return news;
        } catch (error) {
            this.logger.error(error);
            return error;
        }
    }


}
