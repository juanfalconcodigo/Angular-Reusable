import { ActionReducerMap } from "@ngrx/store";
import { adminReducer,AdminState } from './admin/store/admin.reducer';
import { authReducer ,AuthState} from './auth/store/auth.reducer';
export interface AppState{
    search:AdminState,
    auth:AuthState
}

export const appReducers:ActionReducerMap<AppState>={
    search:adminReducer,
    auth:authReducer
}