import { IArticle, IBook, IChapter, IFlashcard } from '@librimem/api-interfaces';
import { IStoreEntity, IStore } from './store';
import { ActionReducerMap } from '@ngrx/store';
import { bookReducer } from './book/book.reducer';
import { chapterReducer } from './chapter/chapter.reducer';
import { RouterReducerState, routerReducer } from '@ngrx/router-store';
import { InitialUserState, userReducer } from './user/user.reducer';
import { flashcardReducer } from './flashcard/flashcard.reducer';
import { articleReducer } from './article/article.reducer';

interface IGlobalState {
  book: IStoreEntity<IBook>,
  chapter: IStoreEntity<IChapter>
  flashcard: IStoreEntity<IFlashcard>
  router: RouterReducerState<any>
  user: InitialUserState
  article: IStoreEntity<IArticle>
  // reader: fromReader.ReaderState
}

export const reducers: ActionReducerMap<IGlobalState> = {
  book: bookReducer,
  chapter: chapterReducer,
  flashcard: flashcardReducer,
  router: routerReducer,
  user: userReducer,
  article: articleReducer
}


