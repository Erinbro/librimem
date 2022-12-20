import { IBook } from '@librimem/api-interfaces';
import { IStore, IStoreEntity } from '../store';
import { createFeatureSelector, createSelector } from '@ngrx/store';

const selectBookState = (state: IStore) => {
  return state.book;
}

export const selectBookStateData = createSelector(selectBookState, (state) => {
  const data = state.data;
  const keys = Object.keys(data)
  const result = keys.map((key) => state.data[key])
  return result;
})

export const selectBookStateSelection = createSelector(selectBookState, (state) => {
  // NOTE We can go sure that it will contain a number because BookCardComponent won't show unless there is a selection
  const id = state.selection.data as number;
  return state.data[id];
})

export const selectBookStateLoading = createSelector(selectBookState, (state) => {
  return state.loading
})
export const selectBookStateLoaded = createSelector(selectBookState, (state) => {
  return state.loaded;
})

export const selectBookStateIsSelecting = createSelector(selectBookState, (state) => {
  return state.selection.isSelecting
})
