import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { NxModule } from '@nrwl/angular';
import { hot } from 'jasmine-marbles';
import { Observable } from 'rxjs';

import * as ReaderActions from './reader.actions';
import { ReaderEffects } from './reader.effects';

describe('ReaderEffects', () => {
  let actions: Observable<Action>;
  let effects: ReaderEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [
        ReaderEffects,
        provideMockActions(() => actions),
        provideMockStore(),
      ],
    });

    effects = TestBed.inject(ReaderEffects);
  });

  describe('init$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: ReaderActions.initReader() });

      const expected = hot('-a-|', {
        a: ReaderActions.loadReaderSuccess({ reader: [] }),
      });

      expect(effects.init$).toBeObservable(expected);
    });
  });
});
