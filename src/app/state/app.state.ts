import { BookI } from "../interfaces/book.interface";

export interface AppStateI {
    books: ReadonlyArray<BookI>;
    collection: ReadonlyArray<string>;
}