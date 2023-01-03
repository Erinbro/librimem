import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { fetch } from '@nrwl/angular';

import * as ReaderActions from './reader.actions';
import * as ReaderFeature from './reader.reducer';

@Injectable()
export class ReaderEffects {
  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ReaderActions.initReader),
      fetch({
        run: (action) => {
          // Your custom service 'load' logic goes here. For now just return a success action...
          return ReaderActions.loadReaderSuccess({ reader: [] });
        },
        onError: (action, error) => {
          console.error('Error', error);
          return ReaderActions.loadReaderFailure({ error });
        },
      })
    )
  );

  constructor(private readonly actions$: Actions) {}
}
