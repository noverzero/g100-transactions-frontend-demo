 import {LOGIN_USER_SUCCESS, REGISTER_USER_SUCCESS} from "../types";

const initialState = {user:{}, token: localStorage.getItem('token')};
export default (state = initialState, action) => {
    switch (action.type) {
        case REGISTER_USER_SUCCESS:
            return state
        case LOGIN_USER_SUCCESS:
            return state
        default:
            return state
    }
}
