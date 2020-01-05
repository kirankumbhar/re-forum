import * as actionTypes from '../actions/actionTypes';

const initialState = {
    loading: false,
    isUserRegistered: false,
    error: false,
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
            }
    
        default:
            return {
                state
            }
    }
}

export default reducer;