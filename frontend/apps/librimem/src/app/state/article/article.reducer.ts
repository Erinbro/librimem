import { IArticle } from '@librimem/api-interfaces';
import { storeEntityGenerator } from '../store';
import { createReducer, on } from '@ngrx/store';
export const articleFeatureName = "article";

export const initialArticleState = storeEntityGenerator<IArticle>()

export const articleReducer = createReducer(
  initialArticleState,
)
