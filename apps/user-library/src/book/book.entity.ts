import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class BookEntity{
    @PrimaryGeneratedColumn()
    id: number;
    @Column({name: "book_name"})
    name: string;
    @Column({name: "book_desc"})
    description: string;
}