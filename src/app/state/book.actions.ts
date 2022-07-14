import { createAction, props } from '@ngrx/store';
import { BookI } from '../interfaces/book.interface';

export const addBook = createAction(
    '[Book List] Add Book', 
    props<{ bookId: string }>()
);

export const removeBook = createAction(
    '[Book Collection] Remove Book', 
    props<{ bookId: string }>()
);

export const retrievedBookList = createAction(
    '[Book List/API] Retrieve Book Success',
    props<{ books: ReadonlyArray<BookI> }>()
);