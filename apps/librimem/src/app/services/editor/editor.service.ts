import { Injectable } from "@angular/core";
import { BehaviorSubject, map, Observable } from "rxjs";

@Injectable({ providedIn: 'root' })
export class EditorService {

  /**
   * Book that is provided
   */
  bookBefore$: BehaviorSubject<string> | null = null;


  /**
   * Updated book
   */
  bookAfter$: BehaviorSubject<string> | null = null;

  /**
   * Metadat of the book
   */
  metadata = {
    usesHeaderTags: false,
    headerTagUsedForChapter: '',
  }

  constructor() { }

  // ---
  // ANCHOR START IDENTIFIERS
  //

  // We want to get the contents of the book. Each chapter with its subchapters title should be identified.

  // NOTE We identify the start by iterating over the html file. The first 7 paragraphs that have more than
  /**
   * Identifies where the book begins id est the first chapter with the first paragraph
   */
  identifyStart(bookBefore: Observable<string>, bookAfter: Observable<string>): Observable<string> {
    return
  }


  identifyChapter(metadata: any) {
    // NOTE If the HTML file uses header tags then we can easily identify a chapter
    if (metadata.usesHeaderTags) {

    }

    else {

    }


  }

  identifyParagraph() {

  }


  //
  // END IDENTIFIERS
  // ---


  // ---
  // ANCHOR START ANNOTATERS
  //

  annotateChapter() {

  }

  annotateParagraph() {

  }

  //
  // END ANNOTATORS
  // ---

  /**
   * Saves the edited book as string in indexedDB
   */
  saveBook(bookBefore: Observable<string>): Observable<string> | Error {

  }

  /**
   * Loads book from indexedDB
   * @param title
   */
  getBook(title: string) {

  }

  // ---
  // ANCHOR START Metadata methods
  //

  // NOTE From the beginning of the book onward check for header tags
  /**
   * Checks if the book uses header tags
   */
  usesHeaderTags(bookBefore: BehaviorSubject<string>, bookAfter: BehaviorSubject<string>): boolean {
    const middleIndex = bookBefore.getValue().length / 2;

    for (let i = middleIndex; i < bookBefore.getValue().length; i++) {
      if (bookBefore.getValue()[i] === "<" && bookBefore.getValue()[i + 1] === "h" && bookBefore.getValue()[i + 3] === ">") {
        return true
      }
    }

    return false;
  }

  //
  // END Metadata methods
  // ---
}
