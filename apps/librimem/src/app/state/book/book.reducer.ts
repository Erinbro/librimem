import { IBook } from '@librimem/api-interfaces';
import { IStoreEntity, IStore } from '../store';
import { createReducer, on } from '@ngrx/store';
import { bookStoreActions } from '.';
import { IEntityType } from "@librimem/api-interfaces"

export const featureName = 'book';

export const initialBookState: IStoreEntity<IBook> = {
  data: {
    "1": { "id": 1, "title": "Gabby Douglas Story, The", "pages": "54", "author_name": "Gouth", "author_prename": "Starr", "language": "Swati", "cover": "http://dummyimage.com/182x100.png/cc0000/ffffff", "read": false, "type": IEntityType.BOOK },
    "2": { "id": 2, "title": "Ghost", "pages": "1493", "author_name": "Horburgh", "author_prename": "Vita", "language": "Assamese", "cover": "http://dummyimage.com/232x100.png/dddddd/000000", "read": false, "type": IEntityType.BOOK },
  },
  add: { data: null, isAdding: false },
  filter: {
    data: [],
    isFiltering: false
  },
  selection: {
    data: null,
    isSelecting: false
  },
  search: {
    isSearching: false,
    data: []
  },
  error: "",
  loaded: false,
  loading: false
}

export const bookReducer = createReducer(
  initialBookState,
  // ANCHOR Book List
  on(bookStoreActions.LOAD_BOOKS, (state) => {
    return {
      ...state,
      loading: true
    }
  }),
  on(bookStoreActions.LOAD_BOOKS_FAILURE, (state,) => {
    return {
      ...state,
      loading: false,
      loaded: true,
      error: 'some error'
    }
  }),
  on(bookStoreActions.LOAD_BOOKS_SUCCESS, (state, { books }) => {
    return {
      ...state,
      loading: false,
      loaded: true,
      // NOTE I love that
      data: books.reduce((acc, book) => ({
        ...acc,
        [book.id]: book
      }), {})
    }
  }),
  // ANCHOR Book Modal
  on(bookStoreActions.UPDATE_BOOK, (state, { updatedBook }) => {
    const storeCopy = JSON.parse(JSON.stringify(state)) as IStoreEntity<IBook>;
    storeCopy.data[updatedBook.id] = updatedBook;
    return storeCopy;
  }
  ),
  on(bookStoreActions.ADD_BOOK, (state, { newBook }) => {
    const storeCopy = JSON.parse(JSON.stringify(state)) as IStoreEntity<IBook>;
    storeCopy.data[newBook.id] = newBook;
    return storeCopy;
  })
)
