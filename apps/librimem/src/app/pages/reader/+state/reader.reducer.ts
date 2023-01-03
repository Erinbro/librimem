import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on, Action } from '@ngrx/store';

import * as ReaderActions from './reader.actions';
import { ReaderEntity } from './reader.models';
import { PDFWorker } from 'pdfjs-dist';

export const READER_FEATURE_KEY = 'reader';

export interface ReaderState extends EntityState<ReaderEntity> {

  data: {
    [id: string | number]: Blob
  },
  loaded: boolean; // has the Reader list been loaded
  error?: string | null; // last known error (if any)
}

export interface ReaderPartialState {
  readonly [READER_FEATURE_KEY]: ReaderState;
}

export const readerAdapter: EntityAdapter<ReaderEntity> =
  createEntityAdapter<ReaderEntity>();

export const initialReaderState: ReaderState = readerAdapter.getInitialState({
  data: {},

  // set initial required properties
  loaded: false,
});

export const reducer = createReducer(
  initialReaderState,
  on(ReaderActions.initReader, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(ReaderActions.loadReaderSuccess, (state, { reader }) =>
    readerAdapter.setAll(reader, { ...state, loaded: true })
  ),
  on(ReaderActions.loadReaderFailure, (state, { error }) => ({
    ...state,
    error,
  }))
);

export function readerReducer(state: ReaderState | undefined, action: Action) {
  return reducer(state, action);
}
