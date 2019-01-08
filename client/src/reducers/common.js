import {
    PROGRESS,
    REDIRECT_TO,
    REDIRECTED
} from '../contants/actionTypes';

const initialState = {
    inProgress: false,
    redirectTo: ''
}

export default (state = initialState, action) => {
    switch (action.type) {
        case REDIRECTED:
            return {
                ...state,
                redirectTo: null
            };
        case REDIRECT_TO:
            return {
                ...state,
                redirectTo: action.value
            };
        case PROGRESS:
            return {
                ...state,
                inProgress: action.value
            };
        default:
            return state;
    }
}