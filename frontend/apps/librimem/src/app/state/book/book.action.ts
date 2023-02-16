import { IBook } from '@librimem/api-interfaces';
import { createAction, props } from '@ngrx/store';

// READ
export const LOAD_BOOKS = createAction('[Book List] Load Books',)

export const LOAD_BOOKS_SUCCESS = createAction('[Book List] Load Books Success', props<{ books: IBook[] }>())

export const LOAD_BOOKS_FAILURE = createAction('[Book List] Load Books Failure')


// UPDATE
export const UPDATE_BOOK = createAction('[Book Page] Update Book', props<{ updateBook: IBook }>())
export const UPDATE_BOOK_SUCCESS = createAction(`[Book Page] Update Book Success`, props<{ updatedBook: IBook }>())

export const SELECT_BOOK = createAction('[Book Card] Open Modal', props<{ id: string | number }>())
export const DESELECT_BOOK = createAction("[Deselect Book]")

// CREATE
export const ADD_BOOK = createAction('[Book Modal] Add Book', props<{ newBook: Omit<IBook, "id"> }>())
export const ADD_BOOK_SUCCESS = createAction(`[Book Modal] Add Book success`, props<{ addedBook: IBook }>())

export const DELETE_BOOK = createAction("[Delete Book]", props<{ bookId: number }>())
export const DELETE_BOOK_SUCCESS = createAction("[Delete Book]")
export const DELETE_BOOK_FAILURE = createAction("[Delete Book]")


