import { Controller, Get } from '@nestjs/common';
import { ServiceService } from './service.service';

@Controller('')
export class ServiceController {

    constructor(private readonly serviceService : ServiceService){}

    @Get("services")
    getOrgServices(){
      return this.serviceService.getServicesFromDb();
    }
}
