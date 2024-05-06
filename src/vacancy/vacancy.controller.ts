import { Controller, Get, Param } from '@nestjs/common';
import { VacancyService } from './vacancy.service';

@Controller('')
export class VacancyController {
    constructor(private vacnacyService: VacancyService) { }

    @Get("vacancy")
    getAllVacancies() {
        return this.vacnacyService.getAllVacanciesFromDb();
    }



    @Get("vacancy/:id")
    getOrgServiceById(@Param('id') id: string) {
        return this.vacnacyService.getVacancyByIdFromDb(id);
    }


}
