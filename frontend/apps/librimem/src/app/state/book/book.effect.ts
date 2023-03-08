import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { switchMap, catchError, map, mergeMap, tap, concatMap, exhaustMap } from 'rxjs/operators';
import { of, from, pipe } from 'rxjs';
import { LOAD_BOOKS, LOAD_BOOKS_SUCCESS, LOAD_BOOKS_FAILURE, ADD_BOOK, ADD_BOOK_SUCCESS, UPDATE_BOOK, UPDATE_BOOK_SUCCESS, DELETE_BOOK, DELETE_BOOK_SUCCESS, SELECT_BOOK, SELECT_BOOK_SUCCESS } from './book.action';
import { BookClient } from '../../services/http/book.client';
import { IBook } from "@librimem/api-interfaces"
import { BookStorageApi } from '../../storage/features/book.storage';
import { ReadableClientService } from '../../services/http/readable.client.service';

/**
 * Service that mediates between IndexedDB and the API.
 */
@Injectable({
  providedIn: "root"
})
export class BookEffects {

  constructor(private actions$: Actions, private bookClient: BookClient, private bookStorageApi: BookStorageApi, private readableClientService: ReadableClientService
  ) { }

  /*
  To handle the behaviour of the Effect when different Action instances
  occurs on the same effect you can change mergeMap to other operators
  */

  // effect from simulating an API call success
  loadBooksEffect$ = createEffect(
    () => this.actions$.pipe(
      // NOTE We grap the LOAD_BOOKS event
      ofType(LOAD_BOOKS),
      mergeMap((_) => {
        return this.bookClient.getBooks().pipe(
          map((res) => LOAD_BOOKS_SUCCESS({ books: res })),
          catchError(() => of(LOAD_BOOKS_FAILURE())),
        )
        // return from(this.bookStorageApi.getBooks()).pipe(
        //   map((res) => LOAD_BOOKS_SUCCESS({ books: res }))
        // );
      }
      )
    )
  )

  addBookEffect$ = createEffect(
    () => this.actions$.pipe(
      ofType(ADD_BOOK),
      mergeMap((action) => {
        // from(this.bookStorageApi.addBook(action.newBook as IBook)).pipe(
        // )

        return this.bookClient.addBook(action.newBook).pipe(
          map((res) => ADD_BOOK_SUCCESS({ addedBook: res }))
        )

      })
    )
  )


  updateBookEffect$ = createEffect(
    () => this.actions$.pipe(
      ofType(UPDATE_BOOK),
      mergeMap((action) => {
        from(this.bookStorageApi.updateBook(action.updateBook)).pipe(
          // map((res) => UPDATE_BOOK_SUCCESS({ updatedBook: res }))
        )
        return this.bookClient.updateBook(action.updateBook).pipe(
          map((res) => UPDATE_BOOK_SUCCESS({ updatedBook: res }))
        )
      })
    )
  )

  // TODO addBookEffect$ = createEffect();
  // TODO updateBookEffect$ = createEffect();
  // deleteBookEffect$ = createEffect();
  deleteBookEffect$ = createEffect(
    () => this.actions$.pipe(
      ofType(DELETE_BOOK),
      switchMap((action) => {
        // TODO Add IndexedDB as fallback for PWA
        return this.bookClient.deleteBook(action.bookId).pipe(
          map((res) => DELETE_BOOK_SUCCESS({ book: res }))
        )
      })
    )
  )


}
