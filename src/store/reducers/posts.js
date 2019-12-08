import * as actionType from '../actions/actionTypes';
const initialState = {
    posts: null
}


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionType.SET_POSTS: return {
            ...state, 
            posts: action.posts
        };  
    
        default: return state;
    }
}

export default reducer;