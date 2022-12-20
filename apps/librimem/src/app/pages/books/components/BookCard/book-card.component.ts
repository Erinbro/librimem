import { Component, Input, OnInit } from '@angular/core';
import { IBook } from '@librimem/api-interfaces';
import { Store } from '@ngrx/store';
import { IStore } from 'apps/librimem/src/app/state/store';
import { OPEN_BOOK_MODAL } from '../../../../state/book/book.action';

/**
 * A visual component that showcases a book
 */
@Component({
  selector: 'librimem-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss'],
})
export class BookCardComponent implements OnInit {

  // NOTE A visual component does not need a reactive variable because it does not treat data
  @Input() book!: IBook

  constructor(private store: Store<IStore>) { }

  ngOnInit(): void {
  }

  openModal() {
    this.store.dispatch(OPEN_BOOK_MODAL({ bookID: this.book.id }))
  }
}
