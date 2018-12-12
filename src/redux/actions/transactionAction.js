import {GET_ALL_TRANSACTION_SUCCESS, ERROR_MESSAGE} from "../types";
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