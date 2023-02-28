import { IArticle } from '@librimem/api-interfaces';
import { createAction, props } from '@ngrx/store';

export const LOAD_ARTICLES = createAction("[Load Articles]")
export const LOAD_ARTICLES_SUCCESS = createAction("[Load Articles Sucess]")
export const LOAD_ARTICLES_FAILURE = createAction("[Load Articles]")

export const ADD_ARTICLE = createAction("[Add Article]", props<{ newArticle: IArticle }>())
export const ADD_ARTICLE_SUCCESS = createAction("[Add Article Success]", props<{ newArticle: IArticle }>())
export const ADD_ARTICLE_FAILURE = createAction("[Add Article]", props<{ newArticle: IArticle }>())

export const UPDATE_ARTICLE = createAction("[Update Article]", props<{ updatedArticle: IArticle }>())
export const UPDATE_ARTICLE_SUCESS = createAction("[Update Article Success]", props<{ updatedArticle: IArticle }>())
export const UPDATE_ARTICLE_FAILURE = createAction("[Update Article]", props<{ updatedArticle: IArticle }>())

export const DELETE_ARTILCE = createAction("[Delete Article]", props<{ articleId: number }>())
export const DELETE_ARTILCE_SUCCESS = createAction("[Delete Article Success]", props<{ article: IArticle }>())
export const DELETE_ARTILCE_FAILURE = createAction("[Delete Article]", props<{ articleId: number }>())

export const SELECT_ARTICLE = createAction("[Select Article]", props<{ selectedArticle: IArticle }>())
export const DESELECT_ARTICLE = createAction("[Select Article]")

