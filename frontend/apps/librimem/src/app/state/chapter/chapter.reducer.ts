import { IChapter } from '@librimem/api-interfaces';
import { IStoreEntity, storeEntityGenerator } from '../store';
import { createReducer, on } from '@ngrx/store';
import * as chapterStoreActions from "./chapter.actions"
import { arrayToEntities } from '../../utils/arrayToEntities';
import chapters from "../../../assets/data/chapters.json";

export const initialChapterState: IStoreEntity<IChapter> = storeEntityGenerator<IChapter>();

initialChapterState.data = arrayToEntities(chapters.chapters)

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
  }),
  on(chapterStoreActions.SELECT_CHAPTER, (state, { selectedChapter }) => {
    return {
      ...state,
      selection: {
        ...state.selection,
        data: selectedChapter
      }
    }
  }),
  on(chapterStoreActions.DESELECT_CHAPTER, (state) => {
    return {
      ...state,
      selection: {
        ...state.selection,
        data: null
      }
    }
  })
  // TODO LOAD_CHAPTERS_FAILURE
)
