import { createSelector, createFeatureSelector } from '@ngrx/store';
import { BookI } from '../interfaces/book.interface';

export const selectBooks = createFeatureSelector<ReadonlyArray<BookI>>('books');
export const selectCollectionState =
  createFeatureSelector<ReadonlyArray<string>>('collection');

export const selectBookCollection = createSelector(
  selectBooks,
  selectCollectionState,
  (books, collection) => {
    return collection.map((id) => books.find((book) => book.id === id));
  }
);
