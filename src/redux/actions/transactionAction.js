import {
    GET_ALL_TRANSACTION_SUCCESS, ERROR_MESSAGE, CREATE_TRANSACTION_SUCCESS, SUCCESS_MESSAGE,
    DELETE_TRANSACTION_SUCCESS
} from "../types";
import axios from "../../axios";

export const getAllTransactions = () => dispatch => {

    return axios.get('/transactions')
        .then((data)=>{
            console.log(data);
            dispatch({
                type:GET_ALL_TRANSACTION_SUCCESS,
                payload: data.data
            })
        }).catch((err)=>{

        })
}

export const createTransaction = (transaction) => dispatch => {
    return axios.post('/transactions', transaction)
        .then((data)=>{
            console.log(data);
            dispatch({
                type: CREATE_TRANSACTION_SUCCESS,
                payload: data.data
            })
        }).catch(()=>{
            dispatch({
                type: ERROR_MESSAGE,
                payload: "We were unable to create your transaction at this time"
            })
        })
}

export const deleteTransaction = (id) => dispatch => {
    return axios.delete(`/transactions/${id}`)
        .then((data)=>{
            console.log(data);
            dispatch({
                type: SUCCESS_MESSAGE,
                payload: data.data.message
            });

            dispatch({
                type: DELETE_TRANSACTION_SUCCESS,
                payload: id
            });
        }).catch(()=>{
            dispatch({
                type: ERROR_MESSAGE,
                payload: "We were unable to delete your transaction at this time"
            })
        })
}

export const updateTransaction = (transaction) => dispatch => {
    return axios.patch(`/transactions/${transaction.id}`, transaction)
        .then((data)=>{
            console.log(data);
            dispatch({
                type: SUCCESS_MESSAGE,
                payload: "Successfully updated your transaction"
            });

            // dispatch({
            //     type: DELETE_TRANSACTION_SUCCESS,
            //     payload: id
            // });
        }).catch(()=>{
            dispatch({
                type: ERROR_MESSAGE,
                payload: "We were unable to update your transaction at this time"
            })
        })
}