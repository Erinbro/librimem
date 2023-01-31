import { IFlashcard } from '@librimem/api-interfaces';
import { IStoreEntity, storeEntityGenerator } from '../../../state/store';
import { createReducer, on } from '@ngrx/store';
import * as flashcardStateActions from "./flashcard.actions"
import { arrayToEntities } from '../../../utils/arrayToEntities';

export const flashcardFeatureName = "flashcard";

export const initialFlashcardState: IStoreEntity<IFlashcard> =
  storeEntityGenerator<IFlashcard>();

export const flashcardReducer = createReducer(
  initialFlashcardState,
  // LOAD_FLASHCARDS
  on(flashcardStateActions.LOAD_FLASHCARDS, (state) => {
    return {
      ...state,
      loading: true,
    }
  }),
  on(flashcardStateActions.LOAD_FLASHCARDS_SUCCESS, (state, { flashcards }) => {
    const loadedFlashcards = arrayToEntities(flashcards)
    return {
      ...state,
      data: {
        ...state.data,
        ...loadedFlashcards
      }
    }
  })
  // TODO LOAD_FLASHCARDS_FAILURE
)
