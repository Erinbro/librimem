import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { BooksPageComponent } from './pages/books/books-page.component';
import { ReaderPageComponent } from './pages/reader/reader-page.component';
import { ChapterPageComponent } from './pages/chapter/chapter-page.component';

const routes: Routes = [
  { path: 'books', component: BooksPageComponent },
  { path: "chapters", component: ChapterPageComponent },
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
