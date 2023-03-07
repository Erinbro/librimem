import { IStore } from '../store';
import { createSelector } from '@ngrx/store';

const readableStateSelector = (store: IStore) => {
  return store.readable;
}

export const selectReadableStateReadable = createSelector(readableStateSelector, (state) => {
  return state.selection.data;
})
