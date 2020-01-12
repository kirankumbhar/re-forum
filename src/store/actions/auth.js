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

export const registerUserFail = (errorDetails, detailsType) => {
    return {
        type: actionTypes.REGISTER_USER_FAIL,
        errorDetails: errorDetails,
        errorDetailsType: detailsType
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
            let errorDetails, errorDetailsType;
            if (constants.REGISTER_ERROR_MSG_KEY) {
                errorDetails = error.response.data[constants.REGISTER_ERROR_MSG_KEY];
                errorDetailsType = 'string';
            }
            else {
                errorDetails = error.response.data;
                errorDetailsType = 'object';

            }
            dispatch(registerUserFail(errorDetails, errorDetailsType));
        });
    }
}