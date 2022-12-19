import { createAction, props } from "@ngrx/store"
import { IBook } from "@librimem/api-interfaces";

// Get the books
export const LOAD_BOOKS = createAction('[Book List] Load Books')
// Getting the books was a success
export const LOAD_BOOKS_SUCCESS = createAction('[Book List] Load Books Success', props<{ books: IBook[] }>())
// Getting the books was an error
export const LOAD_BOOKS_FAILURE = createAction('[Book List] Load Books failure');
