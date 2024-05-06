import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Logger } from  '@nestjs/common';

@Injectable()
export class ServiceService {
    private  readonly logger = new Logger(ServiceService.name);

    constructor(private readonly prisma: PrismaService) {}

    async getServicesFromDb(){
        try {
            const serviceResult =  await this.prisma.service.findMany({
                select : { id : true, title : true, description : true, icon : true},
                orderBy : { id : "asc"}
            });

            return serviceResult;
        } catch (error) {
            this.logger.error(error);
            return error;
        }


    }

    async getServiceByIdFromDb(id : string){
        const numId = parseInt(id);
        
        try {
            const serviceById = await this.prisma.service.findFirst({
                select : { id : true, title : true, description : true, icon : true},
                where : { id : numId}
            })

            return serviceById;
        } catch (error) {
            this.logger.error(error);
            return error;
        }
    }
}
