import {Controller, Get} from '@nestjs/common';
import {BookService} from "./book.service";
import {Book} from "@hecate/hecate-dto";
import {Observable} from "rxjs";

@Controller('book')
export class BookController {
    constructor(private readonly bookService: BookService) {}

    @Get()
    findAll(): Observable<any> {
        return this.bookService.findAll();
    }
}
