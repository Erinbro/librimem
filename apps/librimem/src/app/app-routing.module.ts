import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { BooksPageComponent } from './pages/books/books-page.component';
import { ReaderPageComponent } from './pages/reader/reader-page.component';

const routes: Routes = [
  { path: 'books', component: BooksPageComponent },
  { path: 'reader', component: ReaderPageComponent },
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
