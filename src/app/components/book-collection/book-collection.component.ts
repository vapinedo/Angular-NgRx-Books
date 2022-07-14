import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BookI } from 'src/app/interfaces/book.interface';

@Component({
  selector: 'app-book-collection',
  templateUrl: './book-collection.component.html',
  styleUrls: ['./book-collection.component.scss']
})
export class BookCollectionComponent implements OnInit {

  @Input() books: ReadonlyArray<BookI> = [];
  @Output() remove = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

}
