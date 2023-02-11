import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { switchMap, catchError, map, mergeMap, tap, concatMap, exhaustMap } from 'rxjs/operators';
import { of, from } from 'rxjs';
import { LOAD_BOOKS, LOAD_BOOKS_SUCCESS, LOAD_BOOKS_FAILURE, ADD_BOOK, ADD_BOOK_SUCCESS, UPDATE_BOOK, UPDATE_BOOK_SUCCESS, DELETE_BOOK, DELETE_BOOK_SUCCESS } from './book.action';
import { BookClient } from '../../services/http/book.client';
import { IBook } from "@librimem/api-interfaces"
import { BookPersistence } from '../../services/storage/book.storage';
import { BookStorageApi } from '../../storage/features/book.storage';

/**
 * Service that mediates between IndexedDB and the API.
 */
@Injectable({
  providedIn: "root"
})
export class BookEffects {
  private bookStorageApi!: BookStorageApi

  constructor(private actions$: Actions, private bookClient: BookClient, private bookPersistence: BookPersistence,) {
    this.bookStorageApi = new BookStorageApi();
  }

  /*
  To handle the behaviour of the Effect when different Action instances
  occurs on the same effect you can change mergeMap to other operators
  */

  // effect from simulating an API call success
  loadBooksEffect$ = createEffect(
    () => this.actions$.pipe(
      // NOTE We grap the LOAD_BOOKS event
      ofType(LOAD_BOOKS),
      tap(() => { console.log('new LOAD_BOOKS effect occurred in queue') }),
      mergeMap((_) => {
        return this.bookClient.getBooks().pipe(
          tap((res) => console.log(`res: ${res}`)),
          map((res) => LOAD_BOOKS_SUCCESS({ books: res })),
          catchError(() => of(LOAD_BOOKS_FAILURE())),
        )
      }
      )
    )
  )

  addBookEffect$ = createEffect(
    () => this.actions$.pipe(
      ofType(ADD_BOOK),
      mergeMap((action) => {
        // Add to IndexedDB
        this.bookStorageApi.addBook(action.newBook)
        return this.bookClient.addBook(action.newBook).pipe(
          tap(() => {
            console.log(`Book added to backend`)
          }),
          map((res) => ADD_BOOK_SUCCESS({ addedBook: res }))
        )
      })
    )
  )


  updateBookEffect$ = createEffect(
    () => this.actions$.pipe(
      ofType(UPDATE_BOOK),
      mergeMap((action) => {
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
      mergeMap((action) => {
        return this.bookClient.deleteBook(action.bookId).pipe(
          map((res) => DELETE_BOOK_SUCCESS({ book: res }))
        )
      })
    )
  )


}
