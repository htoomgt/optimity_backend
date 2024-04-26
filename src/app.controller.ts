import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // @Get()
  // getHello(): string {
  //   return this.appService.getHello();
  // }

  @Get("services")
  getOrgServices(){
    return this.appService.getOrgServices();
  }

  @Get("services/:id")
  getOrgServiceById(@Param('id') id:string){
    return this.appService.getOrgServiceById(id);
  }

  @Get("solutions")
  getOrgSolutions(){
    return this.appService.getOrgSolutions();
  }

  @Get("solutions/:id")
  getOrgSolutionById(@Param('id') id : string){
    return this.appService.getOrgSolutionById(id);
  }

  @Get("about")
  getAboutMainContent(){
    return this.appService.getAboutMainContent();
  }

  @Get("visionmission")
  getVisionMission(){
    return this.appService.getVisionMission();
  }

  @Get("corevalues")
  getCoreValues(){
    return this.appService.getCoreValues();
  }

  @Get('news')
  getNews(){
    return this.appService.getNews();
  }

  @Get('vacancy')
  getVacancies(){
    return this.appService.getVacancies();
  }

}
