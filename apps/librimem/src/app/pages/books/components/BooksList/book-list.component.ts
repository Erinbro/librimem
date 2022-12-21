import { Component, OnInit } from '@angular/core';
import { IBook } from '@librimem/api-interfaces';
import { Observable, map, tap } from 'rxjs';
import { Store } from '@ngrx/store';
import { IStore } from '../../../../state/store';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { selectBookStateData } from '../../../../state/book/book.selector';

/**
 * Responsible to showcase the books
 */
@Component({
  selector: 'librimem-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
})
export class BookListComponent implements OnInit {

  // NOTE We need books$ as a list to be used by *ngFor
  books$!: Observable<IBook[]>;

  constructor(private store: Store<IStore>) { }

  ngOnInit(): void {
    // Before assigning the data to books$ I want to transform it to IBook[]
    this.books$ = this.store.select(selectBookStateData);

  }

}
