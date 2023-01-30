import { IChapter } from '@librimem/api-interfaces';
import { IStoreEntity, storeEntityGenerator } from '../store';
import { createReducer, on } from '@ngrx/store';
import * as chapterStoreActions from "./chapter.actions"
import { arrayToEntities } from '../../utils/arrayToEntities';

export const initialChapterState: IStoreEntity<IChapter> = storeEntityGenerator<IChapter>();

export const chapterReducer = createReducer(
  initialChapterState,
  on(chapterStoreActions.LOAD_CHAPTERS, (state) => {
    return {
      ...state,
      loading: true
    }
  }),
  on(chapterStoreActions.LOAD_CHAPTERS_SUCCESS, (state, { chapters }) => {
    const chapterEntities = arrayToEntities(chapters)
    return {
      ...state,
      data: chapterEntities
    }
  })
  // TODO LOAD_CHAPTERS_FAILURE
)