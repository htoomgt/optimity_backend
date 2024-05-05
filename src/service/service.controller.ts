import { Controller, Get, Param } from '@nestjs/common';
import { ServiceService } from './service.service';

@Controller('')
export class ServiceController {

    constructor(private readonly serviceService : ServiceService){}

    @Get("services")
    getOrgServices(){
      return this.serviceService.getServicesFromDb();
    }

    @Get("services/:id")
    getOrgServiceById(@Param('id') id:string){
      return this.serviceService.getServiceByIdFromDb(id);
    }
}
