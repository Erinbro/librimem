import { IBook } from '@librimem/api-interfaces';
import { IStoreEntity, } from '../store';
import { createReducer, on } from '@ngrx/store';
import { bookStoreActions } from '.';
import { IEntityType } from "@librimem/api-interfaces"
import { arrayToEntities } from '../../utils/arrayToEntities';
import bookMocks from "../../../assets/data/books.json"


export const bookFeatureName = 'book';

export const initialBookState: IStoreEntity<IBook> = {
  data: arrayToEntities(bookMocks),
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
    console.log(`Got books: ${books}`);

    const bookEntities = arrayToEntities(books)

    return {
      ...state,
      loading: false,
      loaded: true,
      data: bookEntities
    }
  }),
  on(bookStoreActions.SELECT_BOOK, (state, { id }) => {
    const selectedBook = state.data[id]
    return {
      ...state,
      selection: {
        isSelecting: true,
        data: selectedBook
      }
    }
  }),
  on(bookStoreActions.UPDATE_BOOK, (state, { updateBook }) => {
    console.log("update book");
    return {
      ...state,
      data: {
        ...state.data,
        [updateBook.id.toString()]: updateBook
      }
    }
  }
  ),
  on(bookStoreActions.UPDATE_BOOK_SUCCESS, (state, { updatedBook }) => {
    return {
      ...state,
      data: {
        ...state.data,
        [updatedBook.id.toString()]: updatedBook
      }
    }
  }),
  on(bookStoreActions.ADD_BOOK, (state, { newBook }) => {
    // We add the book without id
    return {
      ...state,
      data: {
        ...state.data,
        [newBook.id]: newBook
      }
    };
  }),
  on(bookStoreActions.ADD_BOOK_SUCCESS, (state, { addedBook }) => {
    // We add the book with id
    return {
      ...state,
      data: {
        ...state.data,
        [addedBook.id]: addedBook
      }
    };
  })

)
