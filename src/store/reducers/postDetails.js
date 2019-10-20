import * as actionType from '../actions/actionTypes';
const initialState = {
    post: null,
    loading: false,
    postError: '',
    commentLoading: false,
    commentError: '',
    comments: [],
    commentsLoading: false,
    commentsError: ''
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
            postError: action.error,
            loading: false
        }
        case actionType.CREATE_COMMENT_START: return {
            ...state,
            commentLoading: true
        }
        case actionType.CREATE_COMMENT_SUCCESS: 
        return {
            ...state,
            comments: state.comments.concat(action.commentData),
            commentLoading: false
        }
        case actionType.CREATE_COMMENT_FAIL: return {
            ...state,
            commentError: action.error,
            commentLoading: false
        }
        case actionType.GET_COMMENTS_START: return {
            ...state,
            commentsLoading: true
        }
        case actionType.GET_COMMENTS_SUCCESS: return {
            ...state,
            comments: action.commentsData,
            commentsLoading: false
        }
        case actionType.GET_COMMENTS_FAIL: return {
            ...state,
            commentsError: action.error,
            commentsLoading: false
        }

        default: return state;
    }
}

export default reducer;