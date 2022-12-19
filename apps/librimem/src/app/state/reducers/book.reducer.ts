import { IBook } from "@librimem/api-interfaces";
import { LOAD_BOOKS_SUCCESS, LOAD_BOOKS_FAILURE } from "../actions/book.action";
import { IStoreEntity } from '../store';
import { createReducer, on } from "@ngrx/store";


export const initialBookState: IStoreEntity<Partial<IBook>> = {
  data: {
    "1": { "id": 1, "title": "Gabby Douglas Story, The", "pages": "54", "author_name": "Gouth", "author_prename": "Starr", "language": "Swati", "cover": "http://dummyimage.com/182x100.png/cc0000/ffffff" },
    "2": { "id": 2, "title": "Ghost", "pages": "1493", "author_name": "Horburgh", "author_prename": "Vita", "language": "Assamese", "cover": "http://dummyimage.com/232x100.png/dddddd/000000" },
  },
  filter: null,
  selection: null,
  search: null,
  error: null,
  loaded: false,
  loading: false
};

export const bookReducer = createReducer(
  initialBookState,
  // NOTE We react on success
  on(LOAD_BOOKS_SUCCESS, (state, { books }) => {
    return {
      ...state,
      data: books.reduce((acc, book) => ({ ...acc, [book.id]: book }), {})
    }
  }),
  on(LOAD_BOOKS_FAILURE, (state, _) => {
    return {
      ...state,
      loaded: true,
    }
  })
)

