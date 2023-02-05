import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { IStore } from '../../state/store';
import { IChapter, IBook } from '@librimem/api-interfaces';
import { selectSelectedBook } from '../../state/book/book.selector';
import { selectChapterStateSelection } from '../../state/chapter/chapter.selectors';
import { DESELECT_BOOK } from '../../state/book/book.action';
import { DESELECT_CHAPTER } from '../../state/chapter/chapter.actions';

@Injectable({
  providedIn: "root"
})
/**
 * Forwards to the correct path
 */
export class RouterService {

  selectedBookTitle: string | undefined;
  selectedChapterTitle: string | undefined;
  selectedFlashcardTitle: string | undefined;
  selectedNoteTitle: string | undefined;

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

  replaceFlashcardString(route: string): string {
    if (!this.selectedFlashcardTitle) {
      return route.replace(new RegExp("\\b" + "flashcard" + "\\b", "gi"), "chapter")
    }

    return route.replace(new RegExp("\\b" + "flashcard" + "\\b", "gi"), this.replaceWhitespace(
      this.selectedFlashcardTitle
    ))

  }

  /**
   * Replaces whitespace with  %20
   * @param title
   * @returns
   */
  replaceWhitespace(title: string): string {
    return title.replace(new RegExp("\\b" + "\\s" + "\\b"), "%20")
  }

  /**
   * Removes '/' from a string
   * @param url
   */
  // sanitizeString(url: string): string {

  // }

  /**
   * Deselects from the store if we navigate
   * to another page
   * @param type
   * @example
   * From /books/book/chapters
   * To /books
   *
   * then we deselect the book
   */
  deselect(params: { param: string, joinedParam: string }[], newUrl: string) {
    const splittedUrl = newUrl.split("/")

    // We do not need to do anything
    if (params.length === 1) return
    if (params.length === splittedUrl.length && splittedUrl.length !== 2) return

    const lastParam = params[params.length - 1].param

    switch (lastParam) {
      case "books": {
        this.store.dispatch(DESELECT_BOOK())
        this.store.dispatch(DESELECT_CHAPTER())

      }
        break;
      case "chapters": {
        this.store.dispatch(DESELECT_BOOK())
        this.store.dispatch(DESELECT_CHAPTER())
      }
        break;
      case "flashcards": {
        this.store.dispatch(DESELECT_BOOK())
        this.store.dispatch(DESELECT_CHAPTER())
        // this.store.dispatch(DESELECT_FLASHCARD())

      }
    }

  }



}
