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
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDialogModule } from '@angular/material/dialog';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { BookEffects } from './state/book/book.effect';
import { CollectionsListComponent } from './pages/collection/components/collections-list/collections-list.component';
import { CollectionsTableComponent } from './pages/collection/components/collections-table/collections-table.component';
import { CollectionModalComponent } from './pages/collection/components/collection-modal/collection-modal.component';
import { ReaderPageComponent } from './pages/reader/reader-page.component';
import { ReaderInputComponent } from './pages/reader/components/reader-input/reader-input.component';
import { AppRoutingModule } from './app-routing.module';
import { QuillModule } from 'ngx-quill';
import { ToolbarComponent } from './shared/toolbar/toolbar.component';
import { ChapterPageModule } from './pages/chapter/chapter-page.module';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { SidenavComponent } from './shared/sidenav/sidenav.component';
import { SidenavService } from './shared/sidenav/sidenav.service';
import { BookPageModule } from './pages/book/book.module';
import { BreadcrumbComponent } from './shared/breadcrumb/breadcrumb.component';
import { BookPageComponent } from './pages/book/book-page.component';
import { MatInputModule } from '@angular/material/input';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ChaptersPageComponent } from './pages/chapters/chapters-page.component';
import { NotesPageComponent } from './pages/notes/notes-page.component';
import { NotePageComponent } from './pages/note/note-page.component';
import { WordsPageComponent } from './pages/words/words-page.component';
import { SummariesPageComponent } from './pages/summaries/summaries-page.component';
import { WordPageComponent } from './pages/word/word-page.component';
import { CollectionsComponent } from './pages/collections/collections.component';
import { ChapterPageComponent } from './pages/chapter/chapter-page.component';
import { CollectionPageComponent } from './pages/collection/collection-page.component';
import { CollectionsModule } from './pages/collections/collections.module';
import { CollectionPageModule } from './pages/collection/collection-page.module';

const materialModules = [
  MatToolbarModule,
  MatIconModule,
  MatSidenavModule,
  MatInputModule,
  MatTooltipModule,
];
const pages = [ChapterPageModule, BookPageModule];
const pagesComponent = [BookPageComponent];
const sharedComponents = [BreadcrumbComponent];

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
    SidenavComponent,
    ToolbarComponent,
    sharedComponents,
    pagesComponent,
    ChaptersPageComponent,
    NotesPageComponent,
    NotePageComponent,
    WordsPageComponent,
    SummariesPageComponent,
    WordPageComponent,
    CollectionsComponent,
    ChapterPageComponent,
    CollectionPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot(reducers),
    // NOTE Store
    EffectsModule.forRoot([BookEffects]),
    BrowserAnimationsModule,
    MatCardModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    QuillModule.forRoot(),
    materialModules,
    pages,
    ReactiveFormsModule,
    ChapterPageModule,
    CollectionsModule,
    CollectionPageModule
  ],
  providers: [SidenavService],
  bootstrap: [AppComponent],
})
export class AppModule { }
