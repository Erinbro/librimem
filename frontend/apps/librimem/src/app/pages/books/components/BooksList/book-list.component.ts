import { Component, OnInit } from '@angular/core';
import { IBook } from '@librimem/api-interfaces';
import { Observable, map, tap, from, share } from 'rxjs';
import { Store } from '@ngrx/store';
import { IStore } from '../../../../state/store';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { selectBookStateData } from '../../../../state/book/book.selector';
import { BookPersistence } from '../../../../services/storage/book.storage';
import { LOAD_BOOKS } from '../../../../state/book/book.action';
import { arrayToEntities } from '../../../../utils/arrayToEntities';
import { entitiesToArray } from '../../../../utils/entitiesToArray';

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

  constructor(private store: Store<IStore>, private bookPersistence: BookPersistence) { }

  ngOnInit(): void {
    this.store.dispatch(LOAD_BOOKS())
    this.books$ = this.store.select(selectBookStateData).pipe(
      tap((res2) => console.log("BookStateData ", res2)),
      map((data) => {
        return entitiesToArray(data)
      }))
  }


}
