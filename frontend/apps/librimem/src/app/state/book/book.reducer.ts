import { IBook } from '@librimem/api-interfaces';
import { IStoreEntity, } from '../store';
import { createReducer, on } from '@ngrx/store';
import { bookStoreActions } from '.';
import { IEntityType } from "@librimem/api-interfaces"
import { arrayToEntities } from '../../utils/arrayToEntities';

// import bookMocks from "../../../assets/data/books.json"


export const bookFeatureName = 'book';

export const initialBookState: IStoreEntity<IBook> = {
  data: {},
  dataMap: new Map<number, IBook>(),
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
    console.log(`got books: ${JSON.stringify(books)}`);


    const bookEntities = arrayToEntities(books)
    console.log(`entities: ${bookEntities}`);


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
      },
    }
  }),
  on(bookStoreActions.SELECT_BOOK_SUCCESS, (state, { readable }) => {
    return {
      ...state,
    }
  })
  ,
  on(bookStoreActions.DESELECT_BOOK, (state) => {
    return {
      ...state,
      selection: {
        isSelecting: false,
        data: null
      },
      reader: undefined
    }
  })
  ,
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
    return {
      ...state,
      add: {
        ...state.add,
        isAdding: true,
      }
    }
  }),
  on(bookStoreActions.ADD_BOOK_SUCCESS, (state, { addedBook }) => {
    return {
      ...state,
      data: {
        ...state.data,
        [addedBook.id]: addedBook
      },
      add: {
        ...state.add,
        data: addedBook
      }
    };
  }),
  on(bookStoreActions.DELETE_BOOK, (state, { bookId }) => {
    const newData = { ...state.data }
    delete newData[bookId]
    return {
      ...state,
      data: {
        ...newData
      }
    }
  }),
)
