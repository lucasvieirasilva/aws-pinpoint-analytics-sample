import {
    PROGRESS,
    REDIRECT_TO,
    REDIRECTED
} from '../contants/actionTypes';

export const setProgress = (value) => ({ type: PROGRESS, value: value })
export const redirectTo = (value) => ({ type: REDIRECT_TO, value: value })
export const redirected = () => ({ type: REDIRECTED })