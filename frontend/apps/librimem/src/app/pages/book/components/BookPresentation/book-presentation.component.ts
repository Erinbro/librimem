import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { IStore } from '../../../../state/store';
import { selectSelectedBook } from '../../../../state/book/book.selector';
import { Subscription } from 'rxjs';
import { IBook, IChapter, IFlashcard, INote, ICitation } from '@librimem/api-interfaces';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import html2pdf from "html2pdf.js"
import { ChapterStorageApi } from '../../../../storage/features/chapter.storage';

@Component({
  selector: 'librimem-book-presentation',
  templateUrl: './book-presentation.component.html',
  styleUrls: ['./book-presentation.component.scss'],
})
export class BookPresentationComponent implements OnInit, OnDestroy {

  book!: IBook
  chapters!: IChapter[] | undefined
  flashcards!: IFlashcard[]
  notes!: INote[]
  citations!: ICitation[]
  bookSubscription!: Subscription

  constructor(
    private store: Store<IStore>,
    private chapterStorageApi: ChapterStorageApi
  ) { }

  ngOnInit(): void {
    this.bookSubscription = this.store.select(selectSelectedBook).subscribe({
      next: (book) => {
        if (book) this.book = book
      }
    })

    this.getResources()
  }

  ngOnDestroy(): void {
    this.bookSubscription.unsubscribe()
  }


  /**
   * Get resources of book such as
   * chapters, flashcards and so on
   */
  async getResources() {
    this.chapters = await this.chapterStorageApi.getChapters(this.book.id)
  }

  htmlToPdf() {
    const element = document.querySelector(".book-presentation__resources")
    const worker = html2pdf().from(element).save();
    console.log(`worker: ${worker}`);

  }

}
