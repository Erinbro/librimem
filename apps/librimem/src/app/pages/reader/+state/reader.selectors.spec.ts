import { ReaderEntity } from './reader.models';
import {
  readerAdapter,
  ReaderPartialState,
  initialReaderState,
} from './reader.reducer';
import * as ReaderSelectors from './reader.selectors';

describe('Reader Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getReaderId = (it: ReaderEntity) => it.id;
  const createReaderEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as ReaderEntity);

  let state: ReaderPartialState;

  beforeEach(() => {
    state = {
      reader: readerAdapter.setAll(
        [
          createReaderEntity('PRODUCT-AAA'),
          createReaderEntity('PRODUCT-BBB'),
          createReaderEntity('PRODUCT-CCC'),
        ],
        {
          ...initialReaderState,
          selectedId: 'PRODUCT-BBB',
          error: ERROR_MSG,
          loaded: true,
        }
      ),
    };
  });

  describe('Reader Selectors', () => {
    it('getAllReader() should return the list of Reader', () => {
      const results = ReaderSelectors.getAllReader(state);
      const selId = getReaderId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelected() should return the selected Entity', () => {
      const result = ReaderSelectors.getSelected(state) as ReaderEntity;
      const selId = getReaderId(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getReaderLoaded() should return the current "loaded" status', () => {
      const result = ReaderSelectors.getReaderLoaded(state);

      expect(result).toBe(true);
    });

    it('getReaderError() should return the current "error" state', () => {
      const result = ReaderSelectors.getReaderError(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
