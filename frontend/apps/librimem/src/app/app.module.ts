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
import { ReaderPageComponent } from './pages/reader/reader-page.component';
import { ReaderInputComponent } from './pages/reader/components/reader-input/reader-input.component';
import { AppRoutingModule } from './app-routing.module';
import { QuillModule } from 'ngx-quill';
import { ToolbarComponent } from './shared/toolbar/toolbar.component';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { SidenavComponent } from './shared/sidenav/sidenav.component';
import { SidenavService } from './shared/sidenav/sidenav.service';
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
import { ChapterPageComponent } from './pages/chapter/chapter-page.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { DrawerComponent } from './shared/drawer/drawer.component';
import { DrawerIconComponent } from './shared/drawer/components/drawer-icon/drawer-icon.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ChaptersListComponent } from './pages/chapters/components/chapters-list/chapters-list.component';
import { ChapterCardComponent } from './pages/chapters/components/chapter-card/chapter-card.component';
import { DeleteDialogComponent } from './shared/dialog/delete-dialog/delete-dialog.component';
import { ErrorDialogComponent } from './shared/dialog/error-dialog/error-dialog.component';
import { InfoDialogComponent } from './shared/dialog/info-dialog/info-dialog.component';
import { FlashcardsPageComponent } from './pages/flashcards/flashcards-page.component';
import { FlashcardDialogComponent } from './pages/flashcards/components/flashcard-dialog/flashcard-dialog.component';
import { FlashcardsTableComponent } from './pages/flashcards/components/flashcards-table/flashcards-table.component';
import { FlashcardCardComponent } from './pages/flashcards/components/flashcard-card/flashcard-card.component';
import { ChapterDenominatorComponent } from './shared/chapter-denominator/chapter-denominator.component';
import { MatExpansionModule } from '@angular/material/expansion';
import {
  NavigationActionTiming,
  StoreRouterConnectingModule,
} from '@ngrx/router-store';
import { RouterSerializer } from './state/router/route-serializer';
import { ChapterDialogComponent } from './pages/chapters/components/chapter-dialog/chapter-dialog.component';
import { MatTable, MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { InfoButtonComponent } from './shared/buttons/info-button/info-button.component';
import { SecondaryButtonComponent } from './shared/buttons/secondary-button/secondary-button.component';
import { PrimaryButtonComponent } from './shared/buttons/primary-button/primary-button.component';

@NgModule({
  declarations: [
    AppComponent,
    BooksPageComponent,
    BookListComponent,
    BookCardComponent,
    BookModalComponent,
    ReaderPageComponent,
    ReaderInputComponent,
    SidenavComponent,
    ToolbarComponent,
    BreadcrumbComponent,
    NotesPageComponent,
    NotePageComponent,
    WordsPageComponent,
    SummariesPageComponent,
    WordPageComponent,
    ChaptersPageComponent,
    ChapterPageComponent,
    BookPageComponent,
    DrawerComponent,
    DrawerIconComponent,
    ChaptersPageComponent,
    ChaptersListComponent,
    ChapterCardComponent,
    DeleteDialogComponent,
    ErrorDialogComponent,
    InfoDialogComponent,
    FlashcardsPageComponent,
    FlashcardDialogComponent,
    FlashcardsTableComponent,
    FlashcardCardComponent,
    ChapterDenominatorComponent,
    ChapterDialogComponent,
    InfoButtonComponent,
    PrimaryButtonComponent,
    SecondaryButtonComponent,
  ],
  imports: [
    MatToolbarModule,
    MatIconModule,
    MatExpansionModule,
    MatSidenavModule,
    MatCardModule,
    MatDialogModule,
    MatInputModule,
    MatTooltipModule,
    MatSlideToggleModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot(reducers),
    // NOTE Store
    EffectsModule.forRoot([BookEffects]),
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    QuillModule.forRoot({}),
    DragDropModule,
    StoreRouterConnectingModule.forRoot({
      navigationActionTiming: NavigationActionTiming.PostActivation,
      serializer: RouterSerializer,
    }),
    MatTableModule,
    MatCheckboxModule,
  ],
  providers: [SidenavService],
  bootstrap: [AppComponent],
})
export class AppModule { }
