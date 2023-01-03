import { Action } from '@ngrx/store';

import * as ReaderActions from './reader.actions';
import { ReaderEntity } from './reader.models';
import {
  ReaderState,
  initialReaderState,
  readerReducer,
} from './reader.reducer';

describe('Reader Reducer', () => {
  const createReaderEntity = (id: string, name = ''): ReaderEntity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('valid Reader actions', () => {
    it('loadReaderSuccess should return the list of known Reader', () => {
      const reader = [
        createReaderEntity('PRODUCT-AAA'),
        createReaderEntity('PRODUCT-zzz'),
      ];
      const action = ReaderActions.loadReaderSuccess({ reader });

      const result: ReaderState = readerReducer(initialReaderState, action);

      expect(result.loaded).toBe(true);
      expect(result.ids.length).toBe(2);
    });
  });

  describe('unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as Action;

      const result = readerReducer(initialReaderState, action);

      expect(result).toBe(initialReaderState);
    });
  });
});
