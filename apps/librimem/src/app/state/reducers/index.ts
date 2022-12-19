import { combineReducers } from "@ngrx/store";
import { bookReducer } from './book.reducer';

/**
 * The combined reducer of all the reducers
 */
export const reducers = combineReducers({
  "book": bookReducer,
})
