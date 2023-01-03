import { createAction, props } from '@ngrx/store';
import { ReaderEntity } from './reader.models';

export const initReader = createAction('[Reader Page] Init');

export const loadReaderSuccess = createAction(
  '[Reader/API] Load Reader Success',
  props<{ reader: ReaderEntity[] }>()
);

export const loadReaderFailure = createAction(
  '[Reader/API] Load Reader Failure',
  props<{ error: any }>()
);
