import * as actionTypes from '../actions/actionTypes';
import jwt_decode from "jwt-decode";

const initialState = {
    loading: false,
    isUserRegistered: false,
    isUserActive: false,
    userId: null,
    username: "",
    firstName: "",
    lastName: "",
    error: false,
    errorDetails: null,
    errorDetailsType: null
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.REGISTER_USER_START:
            return {
                ...state,
                loading: true,
                isUserRegistered: false,
                error: false
            }
        case actionTypes.REGISTER_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                isUserRegistered: true,
            }
        case actionTypes.REGISTER_USER_FAIL:
            return {
                ...state,
                loading: false,
                error: true,
                errorDetails: action.errorDetails,
                errorDetailsType: action.errorDetailsType
            }

        case actionTypes.LOGIN_START:
            return {
                ...state,
                loading: true,
            }
        case actionTypes.LOGIN_SUCCESS:
            return {
                ...state,
                loading: false,
                isUserActive: true,
            }
        case actionTypes.LOGIN_FAIL:
            return {
                ...state,
                loading: false,
                error: true,
                errorDetails: action.errorDetails,
                errorDetailsType: action.errorDetailsType
            }
        case actionTypes.LOGOUT:
            return {
                ...state,
                isUserActive: false,
                username: "",
                firstName: "",
                lastName: "",

            }
        case actionTypes.MEAPI_START:
            return {
                ...state,
                loading: true,
            }
        case actionTypes.MEAPI_SUCCESS:
            return {
                ...state,
                firstName: action.firstName,
                lastName: action.lastName,
                username: action.username,
            }
        case actionTypes.MEAPI_FAIL:
            return {
                ...state,
                loading: false,
            }
        default:
            let token = localStorage['at'];

            if (token) {
                let t_data = jwt_decode(token)
                if (t_data.exp > new Date().getTime() / 1000) {
                    return {
                        ...state,
                        isUserActive: true,
                        userId: t_data.user_id
                    }
                }
                else {
                    localStorage.removeItem('at')
                }
            }
            return {
                ...state,
                isUserActive: false
            }
    }
}

export default reducer;