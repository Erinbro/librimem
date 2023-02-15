import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as FlashcardActions from "./flashcard.actions"
import { mergeMap, map, catchError, tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
// import { FlashcardClient } from '../../../services/http/flashcard.client';
import { LOAD_FLASHCARDS_SUCCESS, LOAD_FLASHCARDS_FAILURE } from './flashcard.actions';
import { of, from } from 'rxjs';
import { FlashcardStorageApi } from '../../storage/features/flashcard.storage';

@Injectable({
  providedIn: "root"
})
export class FlashcardEffects {
  constructor(
    private actions$: Actions,
    // private flashcardClient: FlashcardClient,
    private flashcardStorageApi: FlashcardStorageApi
  ) { }

  loadFlashcardsEffect$ = createEffect(
    () => this.actions$.pipe(
      ofType(FlashcardActions.LOAD_FLASHCARDS),
      mergeMap(({ entityId, chapterId }) => {
        return from(this.flashcardStorageApi.getFlashcards(entityId, chapterId)).pipe(
          map((flashcards) => LOAD_FLASHCARDS_SUCCESS({ flashcards }))
        )

        // NOTE At the moment no backend
        // return this.flashcardClient.getFlashcards().pipe(
        //   map((flashcards) => LOAD_FLASHCARDS_SUCCESS({ flashcards }))
        // )
      }),
      catchError(() => of(LOAD_FLASHCARDS_FAILURE()))
    )
  )
}
