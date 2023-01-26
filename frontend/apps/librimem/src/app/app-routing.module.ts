import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { BooksPageComponent } from './pages/books/books-page.component';
import { ReaderPageComponent } from './pages/reader/reader-page.component';
import { ChapterPageComponent } from './pages/chapter/chapter-page.component';
import { BookPageComponent } from './pages/book/book-page.component';

const routes: Routes = [
  {
    path: 'books', component: BooksPageComponent, title: "Books",
    // children: [
    //   {
    //     path: ":book",
    //     component: BookPageComponent,
    //     data: { breadcrumb: { alias: "Book" } },
    //     children: [
    //       {
    //     path: "chapters",
    //     // FIXME
    //     // component: ChaptersPageComponent
    //     data: { breadcrumb: { alias: "Chapters" } },
    //     children: [
    //       {
    //         path: "chapter",
    //         // FIXME
    //         // component: ChapterPageComponent
    //         data: { breadcrumb: { alias: "Chapter" } },
    //         children: [
    //           {
    //             path: "summaries",
    //             // FIXME
    //             // component: SummariesPageComponent
    //             data: { breadcrumb: { alias: "Summaries" } },
    //             children: [
    //               {
    //                 path: "summary",
    //                 // FIXME
    //                 // component: SummaryPageComponent
    //                 data: { breadcrum: { alias: "Summary" } }
    //               },
    //             ]
    //           },
    //           {
    //             path: "notes",
    //             // FIXME
    //             // component: NotesPageComponent
    //             data: { breadcrumb: { alias: "Notes" } },
    //             children: [
    //               {
    //                 path: "note",
    //                 // FIXME
    //                 // component: NotePageComponent
    //                 data: { breadcrumb: { alias: "Note" } }
    //               }
    //             ]
    //           },
    //         ]
    //       }
    //     ]

    //   },
    // ]
    // }
    // ]
  },
  { path: "books/:book", component: BookPageComponent },
  // {path: "books/:book/chapters", component: ChaptersPageComponent},
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
