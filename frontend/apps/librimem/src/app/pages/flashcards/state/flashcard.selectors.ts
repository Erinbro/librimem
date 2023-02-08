import { IStore } from '../../../state/store';
import { createSelector } from '@ngrx/store';

const selectFlashcardState = (store: IStore) => {
  return store.flashcard;
}

export const selectFlashcardStateData = createSelector(selectFlashcardState, (state) => {
  return state.data
})

export const selectSelectedFlashcard = createSelector(selectFlashcardState, (state) => {
  return state.selection.data;
})
