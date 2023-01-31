import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { IStore } from '../../state/store';
import { IChapter, IBook } from '@librimem/api-interfaces';
import { selectSelectedBook } from '../../state/book/book.selector';
import { selectChapterStateSelection } from '../../state/chapter/chapter.selectors';

@Injectable({
  providedIn: "root"
})
/**
 * Forwards to the correct path
 */
export class RouterService {

  selectedBookTitle!: string | undefined;
  selectedChapterTitle!: string | undefined;

  constructor(private store: Store<IStore>) {
    store.select(selectSelectedBook).subscribe((selectedBook) => {
      if (!selectedBook) return
      this.selectedBookTitle =
        selectedBook.title
    })

    store.select(selectChapterStateSelection).subscribe((selectedChatper) => {
      if (!selectedChatper) return
      this.selectedChapterTitle = selectedChatper.title
    })
  }

  navigate(route: string): string[] {
    let correctedRoute = this.replaceBookString(route)
    correctedRoute = this.replaceChapterString(correctedRoute)

    return correctedRoute.split("/")
  }

  replaceBookString(route: string): string {
    if (!this.selectedBookTitle) {
      return route.replace(new RegExp("\\b" + "book" + "\\b", "gi"), this.replaceWhitespace("book"))
    }

    return route.replace(new RegExp("\\b" + "book" + "\\b", "gi"), this.replaceWhitespace(this.selectedBookTitle))
  }

  replaceChapterString(route: string): string {
    if (!this.selectedChapterTitle) {
      return route.replace(new RegExp("\\b" + "chapter" + "\\b", "gi"), "chapter")
    }

    return route.replace(new RegExp("\\b" + "chapter" + "\\b", "gi"), this.replaceWhitespace(this.selectedChapterTitle))
  }

  /**
   * Replaces whitespace with  %20
   * @param title
   * @returns
   */
  replaceWhitespace(title: string): string {
    return title.replace(new RegExp("\\b" + "\\s" + "\\b"), "%20")
  }

  // TODO
  // sanitizeString() {
  // }


}
