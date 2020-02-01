import {Book} from "@hecate/hecate-dto";

export interface Library {
    id: number;
    user: number;
    name: string;
    description: string;
    books: Book[]
}