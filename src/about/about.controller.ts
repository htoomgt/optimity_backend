import { Controller, Get } from '@nestjs/common';
import { AboutService } from './about.service';

@Controller('about')
export class AboutController {
    constructor(private aboutService: AboutService) { }

    @Get("about")
    getAboutMainContent() {
        return this.aboutService.getAboutMainContentFromDb();
    }

    @Get("visionmission")
    getVissionMission() {
        return this.aboutService.getVisionMissionFromDb();
    }

    @Get("corevalues")
    getCoreValue() {
        return this.aboutService.getCoreValuesFromDb();
    }


}
