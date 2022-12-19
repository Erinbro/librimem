import { Component, OnInit } from '@angular/core';
import { IBook } from '@librimem/api-interfaces';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IStore } from '../../state/store';
import { bookStore } from '../../state';

@Component({
  selector: 'librimem-books-page',
  templateUrl: './books-page.component.html',
  styleUrls: ['./books-page.component.scss']
})
export class BooksPageComponent implements OnInit {

  books$!: Observable<Partial<IBook>>

  constructor(private store: Store<IStore>) { }

  ngOnInit(): void {

    // this.store.select(bookStore.bookStoreSelectors.selectBookStateData).subscribe((data) => {
    //   console.log(data)
    // })
    // this.store.select('book').subscribe((data) => {
    //   console.log(data)
    // })
    this.store.subscribe((data) => {
      console.log(data)
    })
    // this.store.dispatch(LOAD_BOOKS())
  }


}
