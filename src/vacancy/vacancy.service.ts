import { Injectable, Logger } from '@nestjs/common';
import { equal } from 'assert';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class VacancyService {
    private logger = new Logger(VacancyService.name);

    constructor(private prisma: PrismaService) { }

    async getAllVacanciesFromDb() {
        try {
            const vacancies = await this.prisma.vacancy.findMany({
                orderBy: { id: "asc" }
            });

            return vacancies;
        } catch (error) {
            this.logger.error(error);
            return error;
        }
    }

    async getVacancyByIdFromDb(id: string) {
        const numId = parseInt(id);
        this.logger.log(numId);

        try {
            const vacancy = await this.prisma.vacancy.findFirst({
                where: { id: numId }
            });

            return vacancy;

        } catch (error) {
            this.logger.error(error)
            return error;
        }
    }
}
