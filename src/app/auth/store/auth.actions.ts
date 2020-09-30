import { createAction, props } from '@ngrx/store';
import { UserI } from '../../models/user.model';

export const setAuth = createAction('[AUTH] Set auth', props<{ user: UserI, token: string }>());
export const updateAvatar = createAction('[AUTH] Update avatar', props<{ avatar: string }>());
export const getUser = createAction('[AUTH] Get user');
export const clearAuth = createAction('[AUTH] Clear auth')