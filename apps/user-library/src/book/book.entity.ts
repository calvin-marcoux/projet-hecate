import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity({name: 'books'})
export class BookEntity{
    @PrimaryGeneratedColumn()
    id: number;
    @Column({name: "book_name"})
    name: string;
    @Column({name: "book_desc", nullable: true})
    description?: string;
}