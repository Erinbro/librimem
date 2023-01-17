import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { concatMap, mergeMap } from 'rxjs/operators';
import { Observable, EMPTY, tap, of, from, map } from 'rxjs';
import * as StateActions from './chapter.actions';
import { ChapterClient } from '../../../services/http/chapter.client';
import { LOAD_CHAPTERS_SUCCESS } from './chapter.actions';

@Injectable()
export class StateEffects {

  constructor(private actions$: Actions, private chapterClient: ChapterClient) { }

  loadStates$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(StateActions.LOAD_CHAPTERS),
      mergeMap((action) => {
        return from(this.chapterClient.getChapters(action.bookId)).pipe(
          map((res) => LOAD_CHAPTERS_SUCCESS({ chapters: res })),
          // TODO catchError with LOAD_CHAPTERS_FAILURE
        )
      })

    )
  }
  );
}

