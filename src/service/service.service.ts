import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ServiceService {
    constructor(private readonly prisma: PrismaService) {}

    async getServicesFromDb(){
        try {
            const serviceResult =  await this.prisma.service.findMany({
                select : { id : true, title : true, description : true, icon : true},
                orderBy : { id : "asc"}
            });

            return serviceResult;
        } catch (error) {
            console.log(error);
            return error;
        }


    }
}
