import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { switchMap, catchError, map, mergeMap, tap, concatMap, exhaustMap } from 'rxjs/operators';
import { of, from } from 'rxjs';
import { LOAD_BOOKS, LOAD_BOOKS_SUCCESS, LOAD_BOOKS_FAILURE } from './book.action';
import { BookAPI } from '../../services/http/book.api';
import { IBook } from "@librimem/api-interfaces"
import { BookPersistence } from '../../services/storage/book.storage';

/**
 * Service that mediates between IndexedDB and the API.
 */
@Injectable()
export class BookEffects {

  constructor(private actions$: Actions, private bookAPI: BookAPI, private bookPersistence: BookPersistence) { }

  /*
  To handle the behaviour of the Effect when different Action instances
  occurs on the same effect you can change mergeMap to other operators
  */

  // effect from simulating an API call success
  loadBooksEffect$ = createEffect(
    () => this.actions$.pipe(
      ofType(LOAD_BOOKS),
      tap(() => { console.log('new LOAD_BOOKS effect occurred in queue') }),
      mergeMap((action) => {
        console.log('new LOAD_BOOKS effect running')

        // NOTE We consider the case that the app is offline PWA

        // If online we only fetch from the API
        if (navigator.onLine) {
          return of(this.bookAPI.getBooks() as unknown as IBook[]).pipe(
            map((res) => LOAD_BOOKS_SUCCESS({ books: res })),
            catchError(err => of(LOAD_BOOKS_FAILURE())),
            tap(() => { console.log('LOAD_BOOKS online effect finished') })
          )
        }

        // Else we only fetch from indexedDB
        else {
          return from(this.bookPersistence.getBooks()).pipe(
            map((res) => LOAD_BOOKS_SUCCESS({ books: res })),
            catchError(err => of(LOAD_BOOKS_FAILURE())),
            tap(() => { console.log('LOAD_BOOKS offline effect finished') })
          )
        }
      }
      )
    )
  )

  // addBookEffect$ = createEffect();
  // updateBookEffect$ = createEffect();
  // deleteBookEffect$ = createEffect();


}
