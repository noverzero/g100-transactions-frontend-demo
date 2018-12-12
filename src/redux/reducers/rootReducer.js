import { combineReducers } from 'redux';
import userReducer from './userReducer';
import transactionReducer from './transactionReducer';
import messageReducer from './messageReducer';
export default combineReducers({
    transactions: transactionReducer,
    userReducer,
    messages: messageReducer
});
