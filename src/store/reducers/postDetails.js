import * as actionType from '../actions/actionTypes';
const initialState = {
    post: null,
    loading: false,
    error: ''
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionType.GET_POST_START: return {
            ...state,
            loading: true
        }
        case actionType.GET_POST_SUCCESS: return {
            ...state,
            post: action.post,
            loading: false
        }
        case actionType.GET_POST_FAIL: return {
            ...state,
            error: action.error,
            loading: false
        }

        default: return state;
    }
}

export default reducer;