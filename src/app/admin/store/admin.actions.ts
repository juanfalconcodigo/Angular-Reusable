import {createAction, props} from '@ngrx/store';

export const setSearch=createAction('[SEARCH] Set search',props<{search:string}>());
export const getSearch=createAction('[SEARCH] Get search');