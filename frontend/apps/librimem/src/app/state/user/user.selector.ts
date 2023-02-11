import { IStore } from '../store';
import { createSelector, select } from '@ngrx/store';

const selectUserState = (state: IStore) => {
  return state.user;
}


/**
 * Selects the current user who is logged in
 */
export const selectUserStateUser = createSelector(selectUserState, (state) => {
  return state.user;
})

export const selectUserStateIsAuthenticated = createSelector(selectUserState, (state) => {
  return state.isAuthenticated
})

export const selectUserToken = createSelector(selectUserState, (state) => {
  return state.user.token;
})
