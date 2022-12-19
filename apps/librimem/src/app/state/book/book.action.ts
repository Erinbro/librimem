import { IBook } from '@librimem/api-interfaces';
import { createAction, props } from '@ngrx/store';

// ANCHOR Book List
export const LOAD_BOOKS = createAction('[Book List] Load Books')

export const LOAD_BOOKS_SUCCESS = createAction('[Book List] Load Books Success', props<{ books: IBook[] }>())

export const LOAD_BOOKS_FAILURE = createAction('[Book List] Load Books Success')

// ANCHOR Book Modal

export const UPDATE_BOOK = createAction('[Book Modal] Update Book')
