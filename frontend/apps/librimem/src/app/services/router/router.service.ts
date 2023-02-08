import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { IStore } from '../../state/store';
import { IChapter, IBook } from '@librimem/api-interfaces';
import { selectSelectedBook } from '../../state/book/book.selector';
import { selectChapterStateSelection } from '../../state/chapter/chapter.selectors';
import { DESELECT_BOOK } from '../../state/book/book.action';
import { DESELECT_CHAPTER } from '../../state/chapter/chapter.actions';
import { DESELECT_FLASHCARD } from '../../pages/flashcards/state/flashcard.actions';
import { selectSelectedFlashcard } from '../../pages/flashcards/state/flashcard.selectors';

const IEntityRouteMappingEnum = {
  "2": "book",
  "4": "chapter",
  "6": "section",
  "8": [
    "flashcard",
    "summary",
    "note",
    "word",
    "citation"
  ]
}

interface IEntitySelectionMapping {
  book: boolean
  chapter: boolean
  section: boolean
}

interface IRouteState {
  /**
   * The selection before
   */
  before: IEntitySelectionMapping,
  after: IEntitySelectionMapping
}

@Injectable({
  providedIn: "root"
})
/**
 * Forwards to the correct path
 */
export class RouterService {

  selectedBookTitle: string | undefined;
  selectedChapterTitle: string | undefined;
  selectedNoteTitle: string | undefined;

  constructor(private store: Store<IStore>) {
    store.select(selectSelectedBook).subscribe((selectedBook) => {
      if (!selectedBook) {
        this.selectedBookTitle = undefined
        return
      }
      this.selectedBookTitle =
        selectedBook.title
    })

    store.select(selectChapterStateSelection).subscribe((selectedChatper) => {
      if (!selectedChatper) {
        this.selectedChapterTitle = undefined
        return
      }
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
  deselect(newUrl: string) {
    const splittedUrl = newUrl.split("/")

    switch (splittedUrl[splittedUrl.length - 1]) {
      case "books": {
        this.store.dispatch(DESELECT_BOOK())
        this.store.dispatch(DESELECT_CHAPTER())
        this.store.dispatch(DESELECT_FLASHCARD())
      }
        break;
      case "chapters": {
        this.store.dispatch(DESELECT_CHAPTER())
      }
        break;
      case "flashcards": {
        this.store.dispatch(DESELECT_FLASHCARD())
      }
    }
  }
}
