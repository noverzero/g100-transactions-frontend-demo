import {CREATE_TRANSACTION_SUCCESS, DELETE_TRANSACTION_SUCCESS, GET_ALL_TRANSACTION_SUCCESS} from "../types";

const initialState = [];
export default (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_TRANSACTION_SUCCESS:
            return [...state, ...action.payload];
        case CREATE_TRANSACTION_SUCCESS:
            return [action.payload, ...state];
        case DELETE_TRANSACTION_SUCCESS:
            return state.filter(item => item.id !== action.payload);
        default:
            return state
    }
}