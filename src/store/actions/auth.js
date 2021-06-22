import * as actionTypes from './actionTypes';
import axios from '../../axios';
import * as constants from '../../constants';


export const registerUserStart = () => {
    return {
        type: actionTypes.REGISTER_USER_START
    }
}

export const registerUserSuccess = () => {
    return {
        type: actionTypes.REGISTER_USER_SUCCESS
    }
}

export const registerUserFail = (errorDetails, detailsType) => {
    return {
        type: actionTypes.REGISTER_USER_FAIL,
        errorDetails: errorDetails,
        errorDetailsType: detailsType
    }
}

export const registerUser = (data) => {
    data['client_id'] = constants.CLIENT_ID || ''
    data['client_secret'] = constants.CLIENT_SECRET || ''
    return dispatch => {
        dispatch(registerUserStart());
        axios.post('/register/', data).then(response => {
            dispatch(registerUserSuccess());
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

export const logInStart = () => {
    return {
        type: actionTypes.LOGIN_START
    }
}

export const logInSuccess = (data) => {
    return {
        type: actionTypes.LOGIN_SUCCESS,
        data: data
    }
}

export const logInFail = (errorDetails, errorDetailsType) => {
    return {
        type: actionTypes.LOGIN_FAIL,
        errorDetails: errorDetails,
        errorDetailsType: errorDetailsType
    }
}

export const logIn = (data) => {
    return dispatch => {
        dispatch(logInStart());
        axios.post(constants.LOGIN_URL, data).then(response => {
            localStorage['at'] = response.data[constants.ACCESS_TOKEN_KEY]
            dispatch(logInSuccess(response.data));
        }).catch(error => {
            let errorDetails, errorDetailsType;
            if (constants.LOGIN_ERROR_MSG_KEY) {
                errorDetails = error.response.data[constants.LOGIN_ERROR_MSG_KEY];
                errorDetailsType = 'string';
            }
            else {
                errorDetails = error.response.data;
                errorDetailsType = 'object';

            }
            dispatch(logInFail(errorDetails, errorDetailsType));
        });
    }
}

export const meApiStart = () => {
    return {
        type: actionTypes.MEAPI_START
    }
}

export const meApiSuccess = (data) => {
    return {
        type: actionTypes.MEAPI_SUCCESS,
        firstName: data.firstName,
        lastName: data.lastName,
        username: data.username,
        loading: false,
    }
}

export const meApiFail = (errorDetails, errorDetailsType) => {
    return {
        type: actionTypes.MEAPI_FAIL,
        errorDetails: errorDetails,
        errorDetailsType: errorDetailsType
    }
}

export const meApi = () => {
    return dispatch => {
        dispatch(meApiStart());
        axios.get("/me").then(response => {
            dispatch(meApiSuccess(response.data));
        }).catch(error => {
            dispatch(meApiFail());
        });
    }
}