import { createReducer, on } from "@ngrx/store";
import { BookI } from "../interfaces/book.interface";
import { retrievedBookList } from "./book.actions";

export const initialState: ReadonlyArray<BookI> = [];

export const bookReducer = createReducer(
    initialState,
    on(retrievedBookList, (state, { books }) => books)
);