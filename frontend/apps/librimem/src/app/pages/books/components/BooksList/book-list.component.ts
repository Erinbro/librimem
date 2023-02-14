import { Component, OnInit } from '@angular/core';
import { IBook } from '@librimem/api-interfaces';
import { Observable, map, tap, from, share } from 'rxjs';
import { Store } from '@ngrx/store';
import { IStore } from '../../../../state/store';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { selectBookStateData } from '../../../../state/book/book.selector';
import { LOAD_BOOKS } from '../../../../state/book/book.action';
import { arrayToEntities } from '../../../../utils/arrayToEntities';
import { entitiesToArray } from '../../../../utils/entitiesToArray';

/**
 * Responsible to showcase the books
 */
@Component({
  selector: 'librimem-book-list',
  template: `
<div class="books__listing">
  <ng-container *ngFor="let book of books$ | async">
    <librimem-book-card [book]="book"></librimem-book-card>
  </ng-container>
</div>

  `,
  styleUrls: ['./book-list.component.scss'],
})
export class BookListComponent implements OnInit {

  // NOTE We need books$ as a list to be used by *ngFor
  books$!: Observable<IBook[]>;

  constructor(private store: Store<IStore>) { }

  ngOnInit(): void {
    this.store.dispatch(LOAD_BOOKS())
    this.books$ = this.store.select(selectBookStateData).pipe(
      tap((res2) => console.log("BookStateData ", res2)),
      map((data) => {
        return entitiesToArray(data)
      }))
  }


}
