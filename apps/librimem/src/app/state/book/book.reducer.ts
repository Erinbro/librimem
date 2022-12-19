import { IBook } from '@librimem/api-interfaces';
import { IStoreEntity } from '../store';
import { createReducer, on } from '@ngrx/store';
import { LOAD_BOOKS, LOAD_BOOKS_FAILURE, LOAD_BOOKS_SUCCESS } from './book.action';
import { IEntityType } from "@librimem/api-interfaces"

export const featureName = 'book';

export const initialBookState: IStoreEntity<IBook> = {
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
}

export const bookReducer = createReducer(
  initialBookState,
  on(LOAD_BOOKS, (state, _) => {
    return {
      ...state,
      loading: true
    }
  }),
  on(LOAD_BOOKS_FAILURE, (state, _) => {
    return {
      ...state,
      loading: false,
      loaded: true,
      error: 'some error'
    }
  }),
  on(LOAD_BOOKS_SUCCESS, (state, { books }) => {
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
  })
)
