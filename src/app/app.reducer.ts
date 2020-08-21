import { ActionReducerMap } from "@ngrx/store";
import { adminReducer,AdminState } from './admin/store/admin.reducer';
export interface AppState{
    search:AdminState
}

export const appReducers:ActionReducerMap<AppState>={
    search:adminReducer
}