import * as actionType from '../actions/actionTypes';
const initialState = {
    post: null,
    loading: true,
}

const addPostDetails = (state, action) => {
    return {
        ...state,
        post: action.post,
        loading: false
    }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionType.SET_POST: return addPostDetails(state, action)

        default: return state;
    }
}

export default reducer;