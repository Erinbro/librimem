import { IStore } from '../store';
import { createFeatureSelector, createSelector } from '@ngrx/store';

const selectBookState = createFeatureSelector<IStore>('book');

export const selectBookStateData = createSelector(selectBookState, (state) => {
  return state.book?.data;
})
export const selectBookStateLoading = createSelector(selectBookState, (state) => {
  return state.book?.loading;
})
export const selectBookStateLoaded = createSelector(selectBookState, (state) => {
  return state.book?.loaded;
})
