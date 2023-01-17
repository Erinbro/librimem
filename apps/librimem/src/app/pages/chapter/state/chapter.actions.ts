import { IChapter } from '@librimem/api-interfaces';
import { createAction, props } from '@ngrx/store';

export const LOAD_CHAPTERS = createAction(
  '[State] Load Chapters', props<{ bookId: number }>()
);

export const LOAD_CHAPTERS_SUCCESS = createAction('[Chapter List] Load Chapters Success', props<{ chapters: IChapter[] }>())



