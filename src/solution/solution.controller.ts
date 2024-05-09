import { Controller, Get, Param } from "@nestjs/common";
import { SolutionService } from './solution.service';

@Controller("")
export class SolutionController {

    constructor(private solutionService: SolutionService) { }

    @Get("solutions")
    getSolution() {
        return this.solutionService.getAllSolutionFromDb();
    }

    @Get("solutions/:id")
    getSolutionById(@Param("id") id: string) {
        return this.solutionService.getSolutionByIdFromDb(id);
    }
}
