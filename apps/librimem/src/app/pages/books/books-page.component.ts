import { Component, OnInit } from '@angular/core';
import { IBook } from '@librimem/api-interfaces';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IStore } from '../../state/store';
import { LOAD_BOOKS } from '../../state/actions/book.action';

@Component({
  selector: 'librimem-books-page',
  templateUrl: './books-page.component.html',
  styleUrls: ['./books-page.component.scss']
})
export class BooksPageComponent implements OnInit {

  books$!: Observable<Partial<IBook>>

  constructor(private store: Store<IStore>) { }

  ngOnInit(): void {
    this.store.dispatch(LOAD_BOOKS())
    this.store.select<any>((state) => {
      return state
    }).subscribe((state) => {
      console.log(state)
    })
  }


}
