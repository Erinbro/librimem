import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { BooksPageComponent } from './pages/books/books-page.component';
import { ReaderPageComponent } from './pages/reader/reader-page.component';
import { ChapterPageComponent } from './pages/chapter/chapter-page.component';
import { BookPageComponent } from './pages/book/book-page.component';
import { ChaptersPageComponent } from './pages/chapters/chapters-page.component';
import { FlashcardsPageComponent } from './pages/flashcards/flashcards-page.component';
import { AuthPageComponent } from './pages/auth/auth-page.component';
import { RegisterPageComponent } from './pages/auth/components/registration/register-page.component';
import { LoginPageComponent } from './pages/auth/components/login/login-page.component';
import { HomePageComponent } from './pages/home/home-page.component';
import { OauthComponent } from './pages/auth/components/oauth/oauth.component';

const routes: Routes = [
  { path: "", component: HomePageComponent },
  {
    path: 'books', component: BooksPageComponent, title: "Books",
  },
  { path: "books/:book", component: BookPageComponent },
  { path: "books/:book/chapters", component: ChaptersPageComponent },
  { path: "books/:book/chapters/:chapter", component: ChapterPageComponent },
  { path: "books/:book/chapters/:chapter/flashcards", component: FlashcardsPageComponent },
  // {path: "books/:book/chapters/:chapter/notes", component: NotesPageComponent},
  // {path: "books/:book/chapters/:chapter/notes/:note", component: NotePageComponent},
  // {path: "books/:book/chapters/:chapter/words", component: WordsPageComponent},
  // {path: "books/:book/chapters/:chapter/words/:word", component: WordPageComponent},
  // {path: "books/:book/chapters/:chapter/summaries", component: SummariesPageComponetn},
  // {path: "books/:book/chapters/:chapter/summaries/:summary", component: SummaryPageComponent},
  { path: "auth", component: AuthPageComponent },
  { path: "auth/register", component: RegisterPageComponent },
  { path: "auth/login", component: LoginPageComponent },
  // { path: "auth/oauth", component: OauthComponent },
  // { path: "reader", component: ReaderPageComponent },
  { path: '**', redirectTo: '' }
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
