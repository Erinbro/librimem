import { createReducer, on } from '@ngrx/store';
import * as userStoreActions from "./user.actions"
import { IUser } from '@librimem/api-interfaces';

/**
 * Name of the key in the reducer map
 */
export const userFeatureName = "user"

export interface InitialUserState {
  user: Omit<IUser, "id">;
  isAuthenticated: boolean
}

export const initialUserState: InitialUserState = {
  user: {
    username: "",
  },
  isAuthenticated: false
}

export const userReducer = createReducer(
  initialUserState,
  on(userStoreActions.REGISTER, (state, { username }) => {
    return {
      ...state,
      user: {
        username
      },
      isAuthenticated: true
    }
  }),
  on(userStoreActions.LOGIN, (state, { user }) => {
    return {
      ...state,
      ...user
    }
  }),
  on(userStoreActions.AUTHENTICATED, (state) => {
    return {
      ...state,
      isAuthenticated: true
    }
  })
)
