import { IFlashcard, IChapter, ICommentary, ICitation, ISummary, IComment, IEvent, INote, IQuestion, IOpinion, IWord, IBook, ICollection, ISubject } from "@librimem/api-interfaces"
import { initialBookState } from "./book/book.reducer";
import { IEntityType } from "@librimem/api-interfaces";

export interface IStoreEntity<T> {
  data: {
    [id: string]: T;
  };
  // selection: {
  //   /**
  //    * ID of the selected entity
  //    */
  //   data: number | null;
  //   // TODO Do we need it? We can just say <data ? true : false>
  //   // isSelecting: boolean;
  // };
  // filter: {
  //   /**
  //    * ID of the filtered entity
  //    */
  //   data: number[] | null;
  // }
  // search: {
  //   /**
  //    * ID of the entitties that match the search
  //    */
  //   data: number[] | null;
  // }

  selection: number | null;
  filter: number[] | null;
  search: number[] | null;
  error: string | null;
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
  collection: IStoreEntity<ICollection> | undefined;
  book: IStoreEntity<IBook> | undefined;
  /**
   * Contains everything related to the chapter page i.e. '/book/chapter', '/book/chapter/:chapterId' or '/collection/book/chapter/', '/collection/book/chapter/:chapterId'
   */
  chapter: IStoreEntity<IChapter> | undefined;
  //
  // NOTE From here on begin the attributes of the entities. think abstractly!
  //
  flashcard: IStoreEntity<IFlashcard> | undefined;
  commentary: IStoreEntity<ICommentary> | undefined;
  comment: IStoreEntity<IComment> | undefined;
  summary: IStoreEntity<ISummary> | undefined;
  citation: IStoreEntity<ICitation> | undefined;
  event: IStoreEntity<IEvent> | undefined;
  note: IStoreEntity<INote> | undefined;
  question: IStoreEntity<IQuestion> | undefined;
  opinion: IStoreEntity<IOpinion> | undefined;
  subject: IStoreEntity<ISubject> | undefined;
  word: IStoreEntity<IWord> | undefined;
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

// export const store = {} as IStore;
export const globalStore: IStore = {
  book: {
    data: {
      "1": { "id": 1, "title": "Gabby Douglas Story, The", "pages": "54", "author_name": "Gouth", "author_prename": "Starr", "language": "Swati", "cover": "http://dummyimage.com/182x100.png/cc0000/ffffff", "read": false, "type": IEntityType.BOOK },
      "2": { "id": 2, "title": "Ghost", "pages": "1493", "author_name": "Horburgh", "author_prename": "Vita", "language": "Assamese", "cover": "http://dummyimage.com/232x100.png/dddddd/000000", "read": false, "type": IEntityType.BOOK },
    },
    filter: null,
    selection: null,
    search: null,
    error: null,
    loaded: false,
    loading: false
  },
  collection: undefined,
  chapter: undefined,
  flashcard: undefined,
  commentary: undefined,
  comment: undefined,
  summary: undefined,
  citation: undefined,
  event: undefined,
  note: undefined,
  question: undefined,
  opinion: undefined,
  subject: undefined,
  word: undefined
};
