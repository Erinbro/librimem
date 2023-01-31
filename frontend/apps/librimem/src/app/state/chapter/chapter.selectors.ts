import { IStore } from '../store';
import { createSelector } from '@ngrx/store';

const selectChapterState = (state: IStore) => {
  return state.chapter
}

export const selectChapterStateData = createSelector(selectChapterState, (state) => {
  return state.data
})

export const selectChapterStateSelection = createSelector(selectChapterState, (state) => {
  return state.selection.data
})

/**
 * Selects a particular chapter from the store with Id
 */
export const selectChapterById = (id: number) => createSelector(selectChapterState, (state) => {
  return state.data[id]
})
