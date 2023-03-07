import { IReadable } from '@librimem/api-interfaces';
import { IStoreEntity, storeEntityGenerator } from '../store';
import { createReducer, on } from '@ngrx/store';
import * as readableStateActions from "./readable.action"

export const readableFeatureName = "readable"

export const initialReadableState: IStoreEntity<IReadable> = storeEntityGenerator<IReadable>();

export const readableReducer = createReducer(
  initialReadableState,
  on(readableStateActions.LOAD_READABLE, (state) => {
    return { ...state }
  }),
  on(readableStateActions.LOAD_READABLE__SUCCESS, (state, { readable }) => {
    return {
      ...state,
      selection: {
        ...state.selection,
        data: readable,
      }
    }
  }),
)
