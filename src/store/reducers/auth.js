import * as actionTypes from '../actions/actionTypes';
import * as constants from '../../constants';

const initialState = {
    loading: false,
    isUserRegistered: false,
    isUserActive: false, //logged in
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
            if (localStorage['at']) {
                return {
                    ...state,
                    isUserActive: true
                }
            }
            return state
    }
}

export default reducer;