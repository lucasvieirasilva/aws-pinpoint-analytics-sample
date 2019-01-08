import {
    REGISTER_SUCCESS,
    REGISTER_ERROR,
    CONFIRM_SUCCESS,
    CONFIRM_ERROR,
    LOGIN_SUCCESS,
    LOGIN_ERROR,
    LOGOUT
} from '../contants/actionTypes';

const initialState = {}

export default (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_SUCCESS:
        case REGISTER_SUCCESS:
            return {
                ...state,
                user: action.user,
                error: null
            };
        case CONFIRM_SUCCESS:
            return {
                ...state,
                error: null
            };
        case LOGIN_ERROR:
        case REGISTER_ERROR:
        case CONFIRM_ERROR:
            return {
                ...state,
                error: action.error
            };
        case LOGOUT:
            return {
                ...state,
                user: null,
                error: null
            };
        default:
            return state;
    }
}