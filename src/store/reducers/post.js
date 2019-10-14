import * as actionTypes from '../actions/actionTypes';

const initialState = {
    loading: false,
    postCreated: false,
    postCreatedId: ''
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.CREATE_POST_START:
            return {
                ...state,
                loading: true
            }
        case actionTypes.CREATE_POST_SUCCESS:
            return {
                ...state,
                loading: false,
                postCreated: true,
                postCreatedId: action.postId
            }

        case actionTypes.CREATE_POST_FAIL:
            return {
                ...state,
                loading: false,
                postCreated: false
            }
        default:
            return state;
    }
}

export default reducer;