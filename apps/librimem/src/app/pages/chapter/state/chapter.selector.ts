import { createFeatureSelector, createSelector } from '@ngrx/store';
import { } from './chapter.reducer';
import { IStore } from '../../../state/store';
import { IChapter } from '@librimem/api-interfaces';

const selectChapterState = (state: IStore) => {
  return state.chapter
}

export const selectChapterStateData = createSelector(selectChapterState, (chapterState) => {
  return chapterState.data;
})

