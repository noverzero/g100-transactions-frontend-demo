import {SUCCESS_MESSAGE, ERROR_MESSAGE} from "../types";

const initialState = [];
export default (state = initialState, action) => {
    if(!Array.isArray(action.payload)){
        action.payload = [action.payload];
    }
    switch (action.type) {
        case SUCCESS_MESSAGE:
            return action.payload.map(msg => ({type: 'success', message: msg}));
        case ERROR_MESSAGE:
            return action.payload.map(msg => ({type: 'error', message: msg}));
        default:
            return state
    }
}