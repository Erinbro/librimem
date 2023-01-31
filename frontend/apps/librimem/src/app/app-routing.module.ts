import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { BooksPageComponent } from './pages/books/books-page.component';
import { ReaderPageComponent } from './pages/reader/reader-page.component';
import { ChapterPageComponent } from './pages/chapter/chapter-page.component';
import { BookPageComponent } from './pages/book/book-page.component';
import { ChaptersPageComponent } from './pages/chapters/chapters-page.component';
import { FlashcardsPageComponent } from './pages/flashcards/flashcards-page.component';

const routes: Routes = [
  {
    path: 'books', component: BooksPageComponent, title: "Books",
  },
  { path: "books/:book", component: BookPageComponent },
  { path: "books/:book/chapters", component: ChaptersPageComponent },
  { path: "books/:book/chapters/:chapter/flashcards", component: FlashcardsPageComponent },
  // {path: "books/:book/chapters/:chapter", component: ChapterPageComponent},
  // {path: "books/:book/chapters/:chapter/notes", component: NotesPageComponent},
  // {path: "books/:book/chapters/:chapter/notes/:note", component: NotePageComponent},
  // {path: "books/:book/chapters/:chapter/words", component: WordsPageComponent},
  // {path: "books/:book/chapters/:chapter/words/:word", component: WordPageComponent},
  // {path: "books/:book/chapters/:chapter/summaries", component: SummariesPageComponetn},
  // {path: "books/:book/chapters/:chapter/summaries/:summary", component: SummaryPageComponent},

  { path: '**', redirectTo: 'books' }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
})
export class AppRoutingModule { }
