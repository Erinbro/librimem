import { IBook } from '@librimem/api-interfaces';
import { IStoreEntity } from './store';
import { ActionReducerMap } from '@ngrx/store';
import { bookReducer } from './book/book.reducer';
import * as fromReader from "../pages/reader/+state/reader.reducer";

interface IGlobalState {
  book: IStoreEntity<IBook>,
  // reader: fromReader.ReaderState
}

export const reducers: ActionReducerMap<IGlobalState> = {
  book: bookReducer,
  // reader: fromReader.reducer
}


