import { Injectable } from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {BookEntity} from "./book.entity";
import {Repository} from "typeorm";
import {Book} from "@hecate/hecate-dto";
import {from, Observable} from "rxjs";
import {map} from "rxjs/operators";

@Injectable()
export class BookService {
    constructor(
        @InjectRepository(BookEntity)
        private readonly bookEntityRepository: Repository<BookEntity>,
    ) {}

    async findAll(): Promise<Book[]> {
        return from(this.bookEntityRepository.find()).pipe(map<BookEntity[], Book[]>(books => (books.map<Book>(b => ({...b}))))).toPromise();
    }
}
