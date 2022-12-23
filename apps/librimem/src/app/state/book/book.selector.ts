import { IBook } from '@librimem/api-interfaces';
import { IStore, IStoreEntity } from '../store';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { db } from '../../storage/storage';

const selectBookState = (state: IStore) => {
  return state.book;
}

export const selectBookStateData = createSelector(selectBookState, (state) => {
  // store
  const data = state.data;
  const keys = Object.keys(data)
  const result = keys.map((key) => state.data[key])

  return result;
})

export const selectBookStateSelection = createSelector(selectBookState, (state) => {
  // NOTE We can go sure that it will contain a number because BookCardComponent won't show unless there is a selection
  const id = state.selection.data;
  if (id) return state.data[id];
  else return undefined;
})

// NOTE CLOSURE, factory function
export const selectBookStateBookById = (id: number) => createSelector(selectBookState, (state) => {
  return state.data[id.toString()]
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

export const selectBookStateIsAdding = createSelector(selectBookState, (state) => {
  return state.add.isAdding;
})

/**
 * Select the book that is about to be added
 */
export const selectBookStateNewBook = createSelector(selectBookState, (state) => {
  return state.add.data;
})
