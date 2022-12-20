import { IBook } from '@librimem/api-interfaces';
import { IStoreEntity } from './store';
import { ActionReducerMap } from '@ngrx/store';
import { bookReducer } from './book/book.reducer';

interface IGlobalState {
  book: IStoreEntity<IBook>
}

export const reducers: ActionReducerMap<IGlobalState> = {
  book: bookReducer
}


