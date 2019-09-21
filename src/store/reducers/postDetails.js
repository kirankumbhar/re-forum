import * as actionType from '../actions/actionTypes';
const initialState = {
    post: null
}

const addPostDetails = (state, action) => {
    let postDetails = null;
    postDetails = action.post
    return {
        ...state,
        post: postDetails
    }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionType.SET_POST: return addPostDetails(state, action)

        default: return state;
    }
}

export default reducer;