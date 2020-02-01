import {Controller, Get} from '@nestjs/common';
import {BookService} from "./book.service";
import {Book} from "@hecate/hecate-dto";

@Controller('book')
export class BookController {
    constructor(private readonly bookService: BookService) {}

    @Get()
    findAll(): Promise<Book[]> {
        return this.bookService.findAll();
    }
}
