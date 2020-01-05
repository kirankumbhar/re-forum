import * as actionTypes from './actionTypes';
import axios from '../../axios';
import * as constants from '../../constants';


export const registerUserStart = () => {
    return {
        type: actionTypes.REGISTER_USER_START
    }
}

export const registerUserSuccess = (postId) => {
    return {
        type: actionTypes.REGISTER_USER_SUCCESS,
        postId: postId
    }
}

export const registerUserFail = (error) => {
    return {
        type: actionTypes.REGISTER_USER_FAIL,
        error: error
    }
}

export const registerUser = (postData) => {
    postData['client_id'] = constants.CLIENT_ID || ''
    postData['client_secret'] = constants.CLIENT_SECRET || ''
    return dispatch => {
        dispatch(registerUserStart());
        axios.post('/register/', postData).then(response => {
            dispatch(registerUserSuccess(response.data.name));
        }).catch(error => {
            dispatch(registerUserFail(error));
        });
    }
}