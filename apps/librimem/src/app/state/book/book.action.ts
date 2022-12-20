import { IBook } from '@librimem/api-interfaces';
import { createAction, props } from '@ngrx/store';

// ANCHOR Book List
export const LOAD_BOOKS = createAction('[Book List] Load Books')

export const LOAD_BOOKS_SUCCESS = createAction('[Book List] Load Books Success', props<{ books: IBook[] }>())

export const LOAD_BOOKS_FAILURE = createAction('[Book List] Load Books Success')

// ANCHOR Book Modal

export const UPDATE_BOOK = createAction('[Book Modal] Update Book', props<{ updatedBook: IBook }>())

export const CLOSE_BOOK_MODAL = createAction('[Book Modal] Close Modal')

// ANCHOR Book Card

// A book has been selected
export const OPEN_BOOK_MODAL = createAction('[Book Card] Open Modal', props<{ bookID: IBook['id'] }>())

// ANCHOR Book Contaienr

