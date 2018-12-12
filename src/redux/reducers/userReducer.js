 import {LOGIN_USER_SUCCESS, REGISTER_USER_SUCCESS, VERIFY_USER_SUCCESS} from "../types";

const initialState = {user:{}, token: localStorage.getItem('token')};
export default (state = initialState, action) => {
    switch (action.type) {
        case REGISTER_USER_SUCCESS:
            return state
        case LOGIN_USER_SUCCESS:
            localStorage.setItem('token', action.payload.token);
            return {user: action.payload.user, token: action.payload.token}
        case VERIFY_USER_SUCCESS:
            return {...state, user: action.payload}
        default:
            return state
    }
}
