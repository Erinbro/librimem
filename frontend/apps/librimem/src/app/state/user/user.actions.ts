import { createAction, props } from '@ngrx/store';
import { IUser } from '@librimem/api-interfaces';

export const LOGIN = createAction('[Login]', props<{ user: IUser }>())
export const LOGIN_SUCCESS = createAction('[Login Success]', props<{ user: IUser }>())
export const LOGIN_FAILURE = createAction('[Login Success]', props<{ user: IUser }>())

export const REGISTER = createAction('[Register]', props<{ user: IUser }>())
export const REGISTER_SUCCESS = createAction('[Register]', props<{ user: IUser }>())
export const REGISTER_FAILURE = createAction('[Register]', props<{ user: IUser }>())

/**
 * Deletes the user account
 */
export const UNREGISTER = createAction("[Unregister]", props<{ user: IUser }>())
export const UNREGISTER_SUCCESS = createAction("[Unregister]", props<{ user: IUser }>())
export const UNREGISTER_FAILURE = createAction("[Unregister]", props<{ user: IUser }>())
