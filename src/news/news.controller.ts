import { Controller, Get, Param } from '@nestjs/common';
import { NewsService } from './news.service';

@Controller('')
export class NewsController {
    constructor(private newsService: NewsService) { }

    @Get("news")
    getAllNews() {
        return this.newsService.getNewsFromDb();
    }

    @Get("news/:id")
    getNewsById(@Param("id") id: string) {
        return this.newsService.getNewsByIdDb(id);
    }
}
