import { Action, createReducer, on } from '@ngrx/store';
import * as StateActions from './chapter.actions';
import { IStoreEntity, storeEntityGenerator } from '../../../state/store';
import { IChapter, IEntityType } from '@librimem/api-interfaces';
export const stateFeatureKey = 'state';



export const initialChapterState: IStoreEntity<IChapter> =
  storeEntityGenerator<IChapter>();

initialChapterState.data = {
  1: {
    id: 1,
    title: "introduction",
    read: false,
    type: "CHAPTER" as IEntityType.CHAPTER
  }
}


export const chapterReducer = createReducer(
  initialChapterState,
  on(StateActions.LOAD_CHAPTERS, state => {
    return {
      ...state,
      loading: true
    }
  }),
  on(StateActions.LOAD_CHAPTERS_SUCCESS, (state, { chapters }) => {
    return {
      ...state,
      data: chapters.reduce((acc, ch) => {
        return {
          ...acc,
          [ch.id]: ch
        }
      }, {})

    }
  })
);
