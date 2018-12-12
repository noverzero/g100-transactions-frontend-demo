import {GET_ALL_TRANSACTION_SUCCESS} from "../types";

const initialState = [];
export default (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_TRANSACTION_SUCCESS:
            return action.payload;
        default:
            return state
    }
}