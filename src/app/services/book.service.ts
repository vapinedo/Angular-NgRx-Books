import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { of, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { BookI } from '../interfaces/book.interface';

@Injectable({ providedIn: 'root' })
export class GoogleBooksService {
  private readonly apiUrl: string =
    'https://www.googleapis.com/books/v1/volumes?maxResults=5&orderBy=relevance&q=oliver%20sacks';

  constructor(private http: HttpClient) {}

  getBooks(): Observable<Array<BookI>> {
    return this.http
      .get<{ items: BookI[] }>(this.apiUrl)
      .pipe(map((books) => books.items || []));
  }
}
