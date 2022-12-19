import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksRoutingModule } from './books-routing.module';
import { StoreModule } from '@ngrx/store';
import { reducers } from '../../state/index';
import { BookListComponent } from './components/BooksList/book-list.component';

@NgModule({
  declarations: [BookListComponent],
  imports: [
    CommonModule,
    BooksRoutingModule,
    // lazy load and attach to root store
    StoreModule.forFeature('book', { reducers }),
  ],
})
export class BooksModule { }
