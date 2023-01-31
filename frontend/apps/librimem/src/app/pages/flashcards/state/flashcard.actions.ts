import { createAction, props } from '@ngrx/store';
import { IFlashcard } from '../../../../../../../libs/api-interfaces/src/lib/flashcard.interface';

// READ
export const LOAD_FLASHCARDS = createAction('[Load Flashcards]')
export const LOAD_FLASHCARDS_SUCCESS = createAction('[Load Flashcards Success]', props<{ flashcards: IFlashcard[] }>())
export const LOAD_FLASHCARDS_FAILURE = createAction('[Load Flashcards Failure]')

// CREATE
export const ADD_FLASHCARD = createAction('[Add Flashcard]')
export const ADD_FLASHCARD_SUCCESS = createAction('[Add Flashcard Succes]', props<{ addedFlashcard: IFlashcard }>())
export const ADD_FLASHCARD_FAILURE = createAction('[Add Flashcard Failure]')

// UPDATE
export const UPDATE_FLASHCARD = createAction('[Update Flashcard]')
export const UPDATE_FLASHCARD_SUCCESS = createAction('[Update Flashcard Success]')
export const UPDATE_FLASHCARD_FAILURE = createAction('[Update Flashcard Failure]')

// DELETE
export const DELETE_FLASHCARD = createAction('[Delete Flashcard]')
export const DELETE_FLASHCARD_SUCCESS = createAction('[Delete Flashcard Success]')
export const DELETE_FLASHCARD_FAILURE = createAction('[Delete Flashcard Failure]')
