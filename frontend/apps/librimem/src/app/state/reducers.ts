import { IBook, IChapter } from '@librimem/api-interfaces';
import { IStoreEntity, IStore } from './store';
import { ActionReducerMap } from '@ngrx/store';
import { bookReducer } from './book/book.reducer';
import { chapterReducer } from './chapter/chapter.reducer';

interface IGlobalState {
  book: IStoreEntity<IBook>,
  chapter: IStoreEntity<IChapter>
  // reader: fromReader.ReaderState
}

export const reducers: ActionReducerMap<IGlobalState> = {
  book: bookReducer,
  chapter: chapterReducer
  // reader: fromReader.reducer
}


