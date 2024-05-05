import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class SolutionService {
    private logger = new Logger(SolutionService.name);

    constructor(private prisma: PrismaService) { }

    async getAllSolutionFromDb() {
        try {
            const solutions = await this.prisma.solution.findMany({                
                include : { solution_services : true},                
                orderBy: { id: "asc" },

            });

            const changedNameSolutions = this.changePropertyNameArray(solutions, "solution_image_url", "imageUrl")
            return changedNameSolutions;
        } catch (error) {
            this.logger.error(error);
            return error;
        }
    }

    async getSolutionByIdFromDb(id : string){
        const numId = parseInt(id);
        try {
            const solution = await this.prisma.solution.findFirst({
                include : { solution_services : true},
                where : { id : numId}
            });

            const nameChangedSolution = this.changePropertyName(solution, "solution_image_url", "imageUrl");

            return nameChangedSolution;

        } catch (error) {
            this.logger.error(error);
            return error;
        }
    }

    // Function to change the property name
    changePropertyNameArray(array, oldPropertyName, newPropertyName) {
        return array.forEach(obj => {
            // Check if the object has the old property name
            return this.changePropertyName(obj, oldPropertyName, newPropertyName)
        });
    }

    changePropertyName(object, oldPropertyName, newPropertyName){
        if(object.hasOwnProperty(oldPropertyName)){
            // Create a new property with the new name and assign the value
            object[newPropertyName] = object[oldPropertyName];
            // Delete the old property
            delete object[oldPropertyName];
        }

        return object;
    }
}
