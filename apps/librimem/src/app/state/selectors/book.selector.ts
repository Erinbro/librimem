import { IBook } from '@librimem/api-interfaces';
import { IStoreEntity, IStore } from '../store';
import { createFeatureSelector, createSelector } from '@ngrx/store';

const getBookStateSelector = createFeatureSelector<IStore>("book")

export const getBookState = (state: IStore) => {
  return state.book;
}

/**
 * Selects the books of the store
 */
export const geBookDataSelector = createSelector(getBookState, (state) => {
  return state.data;
})

export const getBookLoading = createSelector(getBookState, (state) => {
  return state.loading;
})

export const getBookLoaded = createSelector(getBookState, (state) => {
  return state.loaded;
})
