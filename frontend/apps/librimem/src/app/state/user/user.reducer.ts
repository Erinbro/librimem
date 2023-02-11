import { createReducer, on } from '@ngrx/store';
import * as userStoreActions from "./user.actions"
import { IUser } from '@librimem/api-interfaces';

/**
 * Name of the key in the reducer map
 */
export const userFeatureName = "user"

export interface InitialUserState {
  user: IUser;
  isAuthenticated: boolean
}

export const initialUserState: InitialUserState = {
  user: {
    id: 0,
    username: "",
    password: "",
    token: ""
  },
  isAuthenticated: false
}

export const userReducer = createReducer(
  initialUserState,
  on(userStoreActions.REGISTER, (state, { user }) => {
    return {
      ...state,
      ...user
    }
  }),
  on(userStoreActions.LOGIN, (state, { user }) => {
    return {
      ...state,
      ...user
    }
  })
)
