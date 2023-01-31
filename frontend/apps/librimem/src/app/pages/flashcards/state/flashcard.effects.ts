import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as FlashcardActions from "./flashcard.actions"
import { mergeMap, map, catchError, tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { FlashcardClient } from '../../../services/http/flashcard.client';
import { LOAD_FLASHCARDS_SUCCESS, LOAD_FLASHCARDS_FAILURE } from './flashcard.actions';
import { of } from 'rxjs';

@Injectable({
  providedIn: "root"
})
export class FlashcardEffects {
  constructor(
    private actions$: Actions,
    private flashcardClient: FlashcardClient,
    // private flashcardPersistence
  ) { }

  loadFlashcardsEffect$ = createEffect(
    () => this.actions$.pipe(
      ofType(FlashcardActions.LOAD_FLASHCARDS),
      tap(() => {
        console.log(`new LOAD_FLASHCARDS effect occurred in queue`)
      }),
      mergeMap((_) => {
        return this.flashcardClient.getFlashcards().pipe(
          map((flashcards) => LOAD_FLASHCARDS_SUCCESS({ flashcards }))
        )
      }),
      catchError(() => of(LOAD_FLASHCARDS_FAILURE()))
    )
  )
}
