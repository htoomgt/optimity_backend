import { Controller, Get } from '@nestjs/common';
import { HomeService } from './home.service';

@Controller('')
export class HomeController {

    constructor(private readonly homeService: HomeService){}

    @Get()
    getHome(){
        return "This is optimity backend!";
    }

    @Get("welcome")
    getWelcomeInfo(){
        return this.homeService.getWelcomeInfo();
    }
}
