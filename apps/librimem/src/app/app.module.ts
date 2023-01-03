import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BooksPageComponent } from './pages/books/books-page.component';
import { StoreModule } from '@ngrx/store';
import { BookListComponent } from './pages/books/components/BooksList/book-list.component';
import { reducers } from './state/reducers';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BookCardComponent } from './pages/books/components/BookCard/book-card.component';
import { BookModalComponent } from './pages/books/components/BookModal/book-modal.component';
// ANCHOR Angular Material
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { BookEffects } from './state/book/book.effect';
import { CollectionsPageComponent } from './pages/collection/collections-page.component';
import { CollectionsListComponent } from './pages/collection/components/collections-list/collections-list.component';
import { CollectionsTableComponent } from './pages/collection/components/collections-table/collections-table.component';
import { CollectionModalComponent } from './pages/collection/components/collection-modal/collection-modal.component';
import { ReaderPageComponent } from './pages/reader/reader-page.component';
import { ReaderInputComponent } from './pages/reader/components/reader-input/reader-input.component';
import { AppRoutingModule } from './app-routing.module';
import { QuillModule } from 'ngx-quill';
import { ReaderEffects } from './pages/reader/+state/reader.effects';

@NgModule({
  declarations: [
    AppComponent,
    BooksPageComponent,
    BookListComponent,
    BookCardComponent,
    BookModalComponent,
    CollectionsPageComponent,
    CollectionsListComponent,
    CollectionsTableComponent,
    CollectionModalComponent,
    ReaderPageComponent,
    ReaderInputComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot(reducers),
    // NOTE Store
    EffectsModule.forRoot([BookEffects, ReaderEffects]),
    BrowserAnimationsModule,
    MatCardModule,
    MatDialogModule,
    ReactiveFormsModule,
    QuillModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
