import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksRoutingModule } from './books-routing.module';
import { StoreModule } from '@ngrx/store';
import { bookStore } from '../../state';
import { BookListComponent } from './components/BooksList/book-list.component';

@NgModule({
  declarations: [BookListComponent],
  imports: [
    CommonModule,
    BooksRoutingModule,
    // lazy load and attach to root store
    StoreModule.forFeature(bookStore.bookStoreReducer.featureName, bookStore.bookStoreReducer.bookReducer),
  ],
})
export class BooksModule { }
