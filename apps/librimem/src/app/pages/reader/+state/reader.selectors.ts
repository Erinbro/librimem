import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  READER_FEATURE_KEY,
  ReaderState,
  readerAdapter,
} from './reader.reducer';

// Lookup the 'Reader' feature state managed by NgRx
export const getReaderState =
  createFeatureSelector<ReaderState>(READER_FEATURE_KEY);

const { selectAll, selectEntities } = readerAdapter.getSelectors();

export const getReaderLoaded = createSelector(
  getReaderState,
  (state: ReaderState) => state.loaded
);

export const getReaderError = createSelector(
  getReaderState,
  (state: ReaderState) => state.error
);

export const getAllReader = createSelector(
  getReaderState,
  (state: ReaderState) => selectAll(state)
);

export const getReaderEntities = createSelector(
  getReaderState,
  (state: ReaderState) => selectEntities(state)
);

export const getSelectedId = createSelector(
  getReaderState,
  (state: ReaderState) => state.selectedId
);

export const getSelected = createSelector(
  getReaderEntities,
  getSelectedId,
  (entities, selectedId) => (selectedId ? entities[selectedId] : undefined)
);
