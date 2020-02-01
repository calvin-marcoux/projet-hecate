import { Injectable } from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {BookEntity} from "./book.entity";
import {Repository} from "typeorm";

@Injectable()
export class BookService {
    constructor(
        @InjectRepository(BookEntity)
        private readonly photoRepository: Repository<BookEntity>,
    ) {}

    async findAll(): Promise<BookEntity[]> {
        return this.photoRepository.find();
    }
}
