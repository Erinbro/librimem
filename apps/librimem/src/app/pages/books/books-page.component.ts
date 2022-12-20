import { Component, OnInit } from '@angular/core';
import { IBook } from '@librimem/api-interfaces';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IStore } from '../../state/store';
import { bookStore } from '../../state';
import { selectBookStateIsSelecting } from '../../state/book/book.selector';

@Component({
  selector: 'librimem-books-page',
  templateUrl: './books-page.component.html',
  styleUrls: ['./books-page.component.scss']
})
export class BooksPageComponent implements OnInit {

  // NOTE We need to know if a book was selected in order to 'invoke' BookDialogComponent
  isSelecting$!: Observable<boolean>;

  constructor(private store: Store<IStore>) { }

  ngOnInit(): void {
    this.isSelecting$ = this.store.select(selectBookStateIsSelecting)
  }


}
