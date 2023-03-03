import { createAction, props } from '@ngrx/store';
import { IChapter } from '@librimem/api-interfaces';

export const LOAD_CHAPTERS = createAction('[Chapters Load]', props<{ bookId: number }>())

export const LOAD_CHAPTERS_SUCCESS = createAction('[Chapters Load Success]', props<{ chapters: IChapter[] }>())

export const LOAD_CHAPTERS_FAILURE = createAction('[Chapters Load Failure]')

export const ADD_CHAPTER = createAction('[Add Chapter]', props<{ newChapter: IChapter }>())
export const ADD_CHAPTER_SUCCESS = createAction('[Add Chapter Success]', props<{ addedChapter: IChapter }>())
export const ADD_CHAPTER_FAILURE = createAction('[Add Chapter Failure]')

export const ADD_CHAPTERS = createAction("[Add Chapters]", props<{ newChapters: IChapter[] }>())
export const ADD_CHAPTERS_SUCCESS = createAction("[Add Chapters]", props<{ newChapters: IChapter[] }>())

export const UPDATE_CHAPTER = createAction('[Update Chapter]', props<{ updatedChapter: IChapter }>())

export const UPDATE_CHAPTER_SUCCESS = createAction('[Update Chapter]', props<{ updatedChapter: IChapter }>())

export const UPDATE_CHAPTER_FAILURE = createAction('[Update Chapter]')

export const DELETE_CHAPTER = createAction("[Delete Chapter]", props<{ deletedChapterId: number }>())

export const DELETE_CHAPTER_SUCCESS = createAction("[Delete Chapter]", props<{ deletedChapter: IChapter }>())

export const DELETE_CHAPTER_FAILURE = createAction("[Delete Chapter]")

/**
 * Action that inserts the provided chapter into
 * selection.data
 */
export const SELECT_CHAPTER = createAction("[Select Chapter]", props<{ selectedChapter: IChapter }>())
/**
 * Deselects the current chapter.
 * chapters.selection.data will be empty
 */
export const DESELECT_CHAPTER = createAction("[Deselect Chapter]")
