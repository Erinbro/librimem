import { IBook, IChapter, IFlashcard } from '@librimem/api-interfaces';
import { IStoreEntity, IStore } from './store';
import { ActionReducerMap } from '@ngrx/store';
import { bookReducer } from './book/book.reducer';
import { chapterReducer } from './chapter/chapter.reducer';
import { flashcardReducer } from '../pages/flashcards/state/flashcard.reducer';

interface IGlobalState {
  book: IStoreEntity<IBook>,
  chapter: IStoreEntity<IChapter>
  flashcard: IStoreEntity<IFlashcard>
  // reader: fromReader.ReaderState
}

export const reducers: ActionReducerMap<IGlobalState> = {
  book: bookReducer,
  chapter: chapterReducer,
  flashcard: flashcardReducer
  // reader: fromReader.reducer
}


