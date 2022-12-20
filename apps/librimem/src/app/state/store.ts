import { IFlashcard, IChapter, ICommentary, ICitation, ISummary, IComment, IEvent, INote, IQuestion, IOpinion, IWord, IBook, ICollection, ISubject } from "@librimem/api-interfaces"
import { initialBookState } from "./book/book.reducer";
import { IEntityType } from "@librimem/api-interfaces";

export interface IStoreEntity<T> {
  data: {
    [id: string]: T;
  };
  selection: {
    /**
     * ID of the selected entity
     */
    data: IBook['id'] | null;
    // TODO Do we need it? We can just say <data ? true : false>
    isSelecting: boolean;
  };
  filter: {
    /**
     * ID of the filtered entity
     */
    data: number[];
    isFiltering: boolean;
  }
  search: {
    /**
     * ID of the entitties that match the search
     */
    data: number[];
    isSearching: boolean;
  }

  error: string;

  /**
   * Decides if the entity data is being loaded
   */
  loading: boolean;
  /**
   * Decides if the entity data has finished loading
   */
  loaded: boolean;
}

export interface IStore {
  collection: IStoreEntity<ICollection>;
  book: IStoreEntity<IBook>;
  /**
   * Contains everything related to the chapter page i.e. '/book/chapter', '/book/chapter/:chapterId' or '/collection/book/chapter/', '/collection/book/chapter/:chapterId'
   */
  chapter: IStoreEntity<IChapter>;
  //
  // NOTE From here on begin the attributes of the entities. think abstractly!
  //
  flashcard: IStoreEntity<IFlashcard>;
  commentary: IStoreEntity<ICommentary>;
  comment: IStoreEntity<IComment>;
  summary: IStoreEntity<ISummary>;
  citation: IStoreEntity<ICitation>;
  event: IStoreEntity<IEvent>;
  note: IStoreEntity<INote>;
  question: IStoreEntity<IQuestion>;
  opinion: IStoreEntity<IOpinion>;
  subject: IStoreEntity<ISubject>;
  word: IStoreEntity<IWord>;
}

/**
 * The central state of the app
 */
// export const store: IStore = {
//   /**
//    * Contains everything related to the collection page i.e. '/collection'
//    */
//   collection: {


//   },
//   /**
//    * Contains everything related to book page i.e. '/book', '/book/:bookId' or '/collection/book/', '/collection/book/:bookId'
//    */
//   book: {

//   },
//   chapter: {
//   },

// }

export function storeEntityGenerator<T>(): IStoreEntity<T> {

  return {
    data: {},
    filter: {
      data: [],
      isFiltering: false
    },
    error: "",
    loaded: false,
    loading: false,
    search: {
      data: [],
      isSearching: false
    },
    selection: {
      data: null,
      isSelecting: false
    }
  }
}

// export const store = {} as IStore;
export const globalStore: IStore = {
  book: initialBookState,
  collection: storeEntityGenerator<ICollection>(),
  chapter: storeEntityGenerator<IChapter>(),
  flashcard: storeEntityGenerator<IFlashcard>(),
  commentary: storeEntityGenerator<ICommentary>(),
  comment: storeEntityGenerator<IComment>(),
  summary: storeEntityGenerator<ISummary>(),
  citation: storeEntityGenerator<ICitation>(),
  event: storeEntityGenerator<IEvent>(),
  note: storeEntityGenerator<INote>(),
  question: storeEntityGenerator<IQuestion>(),
  opinion: storeEntityGenerator<IOpinion>(),
  subject: storeEntityGenerator<ISubject>(),
  word: storeEntityGenerator<IWord>()
};
