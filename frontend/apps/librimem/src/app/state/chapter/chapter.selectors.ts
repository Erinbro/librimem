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

