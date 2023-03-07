import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import * as readableActions from "./readable.action"
import { switchMap, mergeMap, map } from 'rxjs/operators';
import { ReadableClientService } from '../../services/http/readable.client.service';

@Injectable({
  providedIn: "root"
})
export class ReadableEffects {
  constructor(private actions$: Actions,
    private readableClientService: ReadableClientService
  ) { }

  loadReadableEffect$ = createEffect(
    () => this.actions$.pipe(
      ofType(readableActions.LOAD_READABLE),
      mergeMap(({ entityId }) => {
        return this.readableClientService.getReadable(entityId).pipe(
          map((res) => readableActions.LOAD_READABLE__SUCCESS({ readable: res }))
        )
      })
    )
  )

  addReadableEffect$ = createEffect(
    () => this.actions$.pipe(
      ofType(readableActions.ADD_READABLE),
      mergeMap(({ newReadable }) => {
        return this.readableClientService.addReadable(newReadable).pipe(
          map((res) => readableActions.ADD_READABLE_SUCCESS({ newReadable: res.readable }))
        )
      })
    )
  )

  selectReadableEffect$ = createEffect(
    () => this.actions$.pipe(
      ofType(readableActions.SELECT_READABLE),
      switchMap(({ entityId }) => {
        return this.readableClientService.getReadable(entityId).pipe(
          map((res) => readableActions.SELECT_READABLE_SUCCESS({ readable: res }))
        )
      })
    )
  )
}
