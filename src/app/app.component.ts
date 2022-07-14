import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { GoogleBooksService } from './services/book.service';
import { selectBookCollection, selectBooks } from './state/book.selectors';
import { retrievedBookList, addBook, removeBook } from './state/book.actions';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  books$: Observable<any>;
  bookCollection$: Observable<any>;

  constructor(private bookSvc: GoogleBooksService, private store: Store) {
    this.books$ = this.store.select(selectBooks);
    this.bookCollection$ = this.store.select(selectBookCollection);
  }

  ngOnInit(): void {
    this.bookSvc.getBooks().subscribe((books) => {
      console.log({ books });
      this.store.dispatch(retrievedBookList({ books }));
    });
  }

  onAdd(bookId: string) {
    this.store.dispatch(addBook({ bookId }));
  }

  onRemove(bookId: string) {
    this.store.dispatch(removeBook({ bookId }));
  }
}
