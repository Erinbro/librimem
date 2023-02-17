import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { switchMap, catchError, map, mergeMap, tap, concatMap, exhaustMap } from 'rxjs/operators';
import { of, from } from 'rxjs';
import { BookClient } from '../../services/http/book.client';
import { IBook, IChapter } from '@librimem/api-interfaces';
import { BookStorageApi } from '../../storage/features/book.storage';
import { LOAD_CHAPTERS, LOAD_CHAPTERS_SUCCESS, ADD_CHAPTER, ADD_CHAPTER_SUCCESS, UPDATE_CHAPTER, UPDATE_CHAPTER_SUCCESS, DELETE_CHAPTER, DELETE_CHAPTER_SUCCESS } from './chapter.actions';
import { ChapterStorageApi } from '../../storage/features/chapter.storage';
import { Chapter } from '../../models/chapter.model';

/**
 * Service that mediates between IndexedDB and the API.
 */
@Injectable({
  providedIn: "root"
})
export class ChapterEffects {
  private chapterStorageApi!: ChapterStorageApi

  constructor(private actions$: Actions, private bookClient: BookClient,) {
    this.chapterStorageApi = new ChapterStorageApi();
  }

  /*
  To handle the behaviour of the Effect when different Action instances
  occurs on the same effect you can change mergeMap to other operators
  */

  // effect from simulating an API call success
  loadChapterEffect$ = createEffect(
    () => this.actions$.pipe(
      // NOTE We grap the LOAD_BOOKS event
      ofType(LOAD_CHAPTERS),
      mergeMap((action) => {
        // NOTE We do not have backend at the moment
        // return this.bookClient.getBooks().pipe(
        //   map((res) => LOAD_BOOKS_SUCCESS({ books: res })),
        //   catchError(() => of(LOAD_BOOKS_FAILURE())),
        // )
        return from(this.chapterStorageApi.getChapters(action.bookId)).pipe(
          map((res) => LOAD_CHAPTERS_SUCCESS({ chapters: res as IChapter[] }))
        );
      }
      )
    )
  )

  addChapterEffect$ = createEffect(
    () => this.actions$.pipe(
      ofType(ADD_CHAPTER),
      mergeMap((action) => {
        // Add to IndexedDB
        return from(this.chapterStorageApi.addChapter(action.newChapter as IChapter)).pipe(
          map((res) => ADD_CHAPTER_SUCCESS({ addedChapter: res }))
        )

        // NOTE At the moment we do not have backend
        // return this.bookClient.addBook(action.newBook).pipe(
        //   tap(() => {
        //     console.log(`Book added to backend`)
        //   }),
        //   map((res) => ADD_BOOK_SUCCESS({ addedBook: res }))
        // )
      })
    )
  )


  updateChapterEffect$ = createEffect(
    () => this.actions$.pipe(
      ofType(UPDATE_CHAPTER),
      mergeMap((action) => {
        return from(this.chapterStorageApi.updateChapter(action.updatedChapter)).pipe(
          map((res) => UPDATE_CHAPTER_SUCCESS({ updatedChapter: res }))
        )
      })
    )
  )


  // deleteBookEffect$ = createEffect();
  deleteBookEffect$ = createEffect(
    () => this.actions$.pipe(
      ofType(DELETE_CHAPTER),
      mergeMap((action) => {
        return from(this.chapterStorageApi.deleteChapter(action.deletedChapterId))
          .pipe(
            map((res) => DELETE_CHAPTER_SUCCESS({ deletedChapter: res }))
          )

        // NOTE At the moment no backend
        // return this.bookClient.deleteBook(action.bookId).pipe(
        //   map((res) => DELETE_BOOK_SUCCESS({ book: res }))
        // )
      })
    )
  )


}
