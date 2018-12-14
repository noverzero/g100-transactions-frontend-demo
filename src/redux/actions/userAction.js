import {SUCCESS_MESSAGE, LOGIN_USER_SUCCESS, ERROR_MESSAGE, VERIFY_USER_SUCCESS} from "../types";
import axios from "../../axios";

export const userLogin = (user) => dispatch => {
    return axios.post('/sessions', user)
        .then((data)=>{
            dispatch({
                type: LOGIN_USER_SUCCESS,
                payload: data.data
            });

            dispatch({
                type: SUCCESS_MESSAGE,
                payload: data.data.message
            });
        }).catch(err=>{
            dispatch({
                type: ERROR_MESSAGE,
                payload: err.response.data.message
            })
        })
}

export const userRegister = (user) => dispatch => {
    return axios.post('/users', user)
        .then((data)=>{
            dispatch({
                type: SUCCESS_MESSAGE,
                payload: data.data.message
            })
        })
}

export const verifyUser = () => dispatch => {
    return axios.get('/user')
        .then((data)=>{
            console.log(data);

            dispatch({
                type: VERIFY_USER_SUCCESS,
                payload: data.data
            })
        }).catch(err=>{
            // dispatch({
            //     type: ERROR_MESSAGE,
            //     payload: err
            // })
        })
}