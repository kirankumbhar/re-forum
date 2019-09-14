import * as actionType from '../actions/actionTypes';
const initialState = {
    posts: null
}

const addPosts = (state, action) => {
    let postData = [];
    for (const key in action.posts) {
        postData.push({
            id: key,
            title: action.posts[key].title,
            author: action.posts[key].author,
            description: action.posts[key].description   
        });
    }
    return {
        ...state,
        posts: postData
    }
}


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionType.SET_POSTS: return addPosts(state, action);  
    
        default: return state;
    }
}

export default reducer;