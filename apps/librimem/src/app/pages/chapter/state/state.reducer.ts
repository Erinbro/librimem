import { Action, createReducer, on } from '@ngrx/store';
import * as StateActions from './state.actions';
import { IStoreEntity, storeEntityGenerator } from '../../../state/store';
import { IChapter } from '@librimem/api-interfaces';
export const stateFeatureKey = 'state';


export const initialState: IStoreEntity<IChapter> =
  storeEntityGenerator()


export const chapterReducer = createReducer(
  initialState,

  on(StateActions.loadStates, state => state),

);
