import { IChapter } from '@librimem/api-interfaces';
import { IStoreEntity, storeEntityGenerator } from '../store';
import { createReducer, on } from '@ngrx/store';
import * as chapterStoreActions from "./chapter.actions"
import { arrayToEntities } from '../../utils/arrayToEntities';
// import chapters from "../../../assets/data/chapters.json";
import { entitiesToArray } from '../../utils/entitiesToArray';

export const initialChapterState: IStoreEntity<IChapter> = storeEntityGenerator<IChapter>();

// initialChapterState.data = arrayToEntities(chapters.chapters)

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
  on(chapterStoreActions.ADD_CHAPTER, (state, { newChapter }) => {
    return state
  }),
  on(chapterStoreActions.ADD_CHAPTER_SUCCESS, (state, { addedChapter }) => {
    return {
      ...state,
      data: {
        ...state.data,
        [addedChapter.id]: addedChapter
      }
    }
  })
  ,
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
  }),
  on(chapterStoreActions.UPDATE_CHAPTER, (state, { updatedChapter }) => {
    return {
      ...state,
      data: {
        ...state.data,
        [updatedChapter.id]: updatedChapter
      }
    }
  }),
  // TODO LOAD_CHAPTERS_FAILURE
  on(chapterStoreActions.DELETE_CHAPTER, (state, { deletedChapterId }) => {
    const filtedredChapters = entitiesToArray(state.data).filter((v) => v.id != deletedChapterId)
    return {
      ...state,
      data: {
        ...arrayToEntities(filtedredChapters)
      }
    }
  }),
  on(chapterStoreActions.DELETE_CHAPTER_SUCCESS, (state, { deletedChapter }) => {
    return state;
  })
)
