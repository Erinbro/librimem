import { IChapter } from "@librimem/api-interfaces"
import { ISummary } from '../../../../../libs/api-interfaces/src/lib/summary.interface';

interface IStore {
  collection: {};
  book: {};
  /**
   * Contains everything related to the chapter page i.e. '/book/chapter', '/book/chapter/:chapterId' or '/collection/book/chapter/', '/collection/book/chapter/:chapterId'
   */
  chapter: {
    chapters: {
      [id: number]: IChapter;
    };
    selection: {
      /**
       * ID of the selected chapter
       */
      chapter: number | undefined;
      /**
       * If we are selecting a chapter then we open the modal/dialog
       */
      isSelecting: boolean;
    };
    // NOTE filter and search is not the same because this are two seperate components
    filter: {
      isFiltering: boolean;
      /**
       * ID of the filtered chapters
       */
      chapters: number[];
    },
    search: {
      isSearching: boolean,
      /**
       * ID of the filtered chapters by search
       */
      chapters: number[]
    }
  },
  //
  // NOTE From here on begin the attributes of the entities. think abstractly!
  //
  flashcard: {};
  commentary: {};
  comment: {};
  summary: {
    summary: ISummary
    selection: {
      isSelecting: boolean;
    };
    filter: {
      isFiltering: boolean;
    }
  };
  citation: {

  };
  event: {};
  note: {};
  question: {};
  opinion: {};
  subject: {};
  word: {};
  article: {};
}

/**
 * The central state of the app
 */
const store: IStore = {
  /**
   * Contains everything related to the collection page i.e. '/collection'
   */
  collection: {

  },
  /**
   * Contains everything related to book page i.e. '/book', '/book/:bookId' or '/collection/book/', '/collection/book/:bookId'
   */
  book: {

  },
  chapter: {
  },

}
