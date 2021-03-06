import { state } from '@angular/animations';
import { createReducer, on } from '@ngrx/store';
import { UserI } from '../../models/user.model';
import { setAuth, clearAuth, updateAvatar } from './auth.actions';

export interface AuthState {
    user: UserI;
    token: string;
}

const initialState: AuthState = {
    user: null,
    token: null
}


const _authReducer = createReducer(initialState,
    on(setAuth, (state, { user, token }) => {
        return {
            user,
            token
        }
    }),
    on(clearAuth, (state) => {
        return {
            user: null,
            token: null
        }
    }),
    on(updateAvatar, (state, { avatar }) => {
        return {
            ...state,
            user: {
                ...state.user,
                avatar
            }
        }
    })
);


export function authReducer(state, action) {
    return _authReducer(state, action);
}

