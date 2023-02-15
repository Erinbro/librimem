import { createAction, props } from '@ngrx/store';
import { IFlashcard } from '@librimem/api-interfaces';

// READ
export const LOAD_FLASHCARDS = createAction('[Load Flashcards]',
  props<{ entityId: number, chapterId?: number }>()
)
export const LOAD_FLASHCARDS_SUCCESS = createAction('[Load Flashcards Success]', props<{ flashcards: IFlashcard[] }>())
export const LOAD_FLASHCARDS_FAILURE = createAction('[Load Flashcards Failure]')

// CREATE
export const ADD_FLASHCARD = createAction('[Add Flashcard]', props<{ newFlashcard: IFlashcard }>())
export const ADD_FLASHCARD_SUCCESS = createAction('[Add Flashcard Succes]')
export const ADD_FLASHCARD_FAILURE = createAction('[Add Flashcard Failure]')

// UPDATE
export const UPDATE_FLASHCARD = createAction('[Update Flashcard]', props<{ updatedFlashcard: IFlashcard }>())
export const UPDATE_FLASHCARD_SUCCESS = createAction('[Update Flashcard Success]')
export const UPDATE_FLASHCARD_FAILURE = createAction('[Update Flashcard Failure]')

// DELETE
export const DELETE_FLASHCARD = createAction('[Delete Flashcard]', props<{ id: number }>())
export const DELETE_FLASHCARD_SUCCESS = createAction('[Delete Flashcard Success]')
export const DELETE_FLASHCARD_FAILURE = createAction('[Delete Flashcard Failure]')

export const DELETE_FLASHCARDS = createAction('[Delete Flashcard]', props<{ ids: number[] }>())
export const DELETE_FLASHCARDS_SUCCESS = createAction('[Delete Flashcard Success]')
export const DELETE_FLASHCARDS_FAILURE = createAction('[Delete Flashcard Failure]')

// SELECTION
export const SELECT_FLASHCARD = createAction("[Select Flashcard]", props<{ selectedFlashcard: IFlashcard }>())
export const DESELECT_FLASHCARD = createAction("[Select Flashcard]")

export const ADDING_FLASHCARD = createAction("[Adding Flashcard]")
