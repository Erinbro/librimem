import { createAction, props } from '@ngrx/store';
import { IReadable } from '@librimem/api-interfaces';

export const LOAD_READABLE = createAction("[Load Readable]", props<{ entityId: number }>());
export const LOAD_READABLE__SUCCESS = createAction("[Load Readable Success]", props<{ readable: IReadable }>())
export const LOAD_READABLE__FAILURE = createAction("[Load Readable Failure]")

export const ADD_READABLE = createAction("[Add Readable]", props<{ newReadable: IReadable }>())
export const ADD_READABLE_SUCCESS = createAction("[Add Readable Success]", props<{ newReadable: IReadable }>())
export const ADD_READABLE_FAILURE = createAction("[Add Readable Failure]")

export const UPDATE_READABLE = createAction("[Add Readable]", props<{ updatedReadable: IReadable }>())
export const UPDATE_READABLE_SUCCESS = createAction("[Add Readable Success]", props<{ updatedReadable: IReadable }>())
export const UPDATE_READABLE_FAILURE = createAction("[Add Readable Success]")

export const DELETE_READABLE = createAction("[Delete Readable]", props<{ readableId: number }>())
export const DELETE_READABLE_SUCCESS = createAction("[Delete Readable Success]", props<{ deletedReadable: IReadable }>())
export const DELETE_READABLE_FAILURE = createAction("[Delete Readable Failure]")

export const SELECT_READABLE = createAction("[Select Readable]", props<{ entityId: number }>())
export const SELECT_READABLE_SUCCESS = createAction("[Select Readable]", props<{ readable: IReadable }>())
export const SELECT_READABLE_FAILURE = createAction("[Select Readable]")

