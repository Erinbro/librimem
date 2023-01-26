import { Component, OnInit } from '@angular/core';
import { IChapter } from '@librimem/api-interfaces';
import { State, Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { selectSelectedBook } from '../../../../state/book/book.selector';
import { IStore } from '../../../../state/store';
import { ChapterClient } from '../../../../services/http/chapter.client';
import { LOAD_CHAPTERS } from '../../state/chapter.actions';
import { selectChapterStateData } from '../../state/chapter.selector';
import { entitiesToArray } from '../../../../utils/entitiesToArray';

@Component({
  selector: 'librimem-chapter-list',
  templateUrl: './chapter-list.component.html',
  styleUrls: ['./chapter-list.component.scss'],
  providers: [ChapterClient]
})
export class ChapterListComponent implements OnInit {
  chapters!: Observable<IChapter[]>
  selectedBookId!: number
  /**
   * Decides if a book is selected.
   * If no book is selected then we show an error modal/dialog.
   */
  bookSelected = true;

  constructor(private store: Store<IStore>) { }

  ngOnInit(): void {
    this.store.select(selectChapterStateData).subscribe((chapters) => {

      this.chapters = of(entitiesToArray(chapters));
    })
    this.store.select(selectSelectedBook).subscribe((book) => {
      // Case 1: no book is selected
      if (!book) return // Show error modal
      // Case 2: a book is selected
      else {
        this.bookSelected = true
        this.selectedBookId = book.id

        // Fetch chapters
        this.store.dispatch(LOAD_CHAPTERS({ bookId: this.selectedBookId }))
      }
    })
  }
}
