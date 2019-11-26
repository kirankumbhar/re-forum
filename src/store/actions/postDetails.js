import * as actionTypes from './actionTypes';
import axios from '../../axios';

//get post on post details page
export const getPost = (id) => {
    return dispatch => {
        dispatch(getPostStart());
        axios.get('/posts/' + id + '.json' )
            .then(response => {
                response.data['id'] = id;
                dispatch(getPostSuccess(response.data));
            })
            .catch(error => {
                dispatch(getPostFail(error));
            });
    }
}

export const getPostStart = () => {
    return {
        type: actionTypes.GET_POST_START
    }
}

export const getPostSuccess = (postData) => {
    return {
        type: actionTypes.GET_POST_SUCCESS,
        post: postData
    }
}

export const getPostFail = (error) => {
    return {
        type: actionTypes.GET_POST_FAIL,
        error: error
    }
}

//create comment on post details page
export const createComment = (postId, commentData) => {
    return dispatch => {
        dispatch(createCommentStart());
        axios.post('/posts/' + postId + '/comments.json', commentData)
            .then(response => {
                dispatch(createCommentSuccess(commentData));
            })
            .catch(error => {
                dispatch(createCommentFail(error));
            });
    }
}

export const createCommentStart = () => {
    return {
        type: actionTypes.CREATE_COMMENT_START
    }
}

export const createCommentSuccess = (commentData) => {
    return {
        type: actionTypes.CREATE_COMMENT_SUCCESS,
        commentData: commentData
    }
}

export const createCommentFail = (error) => {
    return {
        type: actionTypes.CREATE_COMMENT_SUCCESS,
        error: error
    }
}

//get all comments on post details page
export const getComments = (postId) => {
    return dispatch => {
        dispatch(getCommentsStart());
        axios.get('/posts/' + postId + '/comments.json')
            .then(response => {
                dispatch(getCommentsSuccess(response.data));
            })
            .catch(error => {
                dispatch(getCommentsFail(error));
            });
    }
}

export const getCommentsStart = () => {
    return {
        type: actionTypes.GET_COMMENTS_START
    }
}

export const getCommentsSuccess = (commentsData) => {
    //quick fix for firebase
    let comments = [];
    if (typeof commentsData === 'object') {
        for (const key in commentsData) {
            const comment = commentsData[key];
            comments.push(comment);
        }
    }
    else {
        comments = commentsData
    }
    return {
        type: actionTypes.GET_COMMENTS_SUCCESS,
        commentsData: comments
    }
}

export const getCommentsFail = (error) => {
    return {
        type: actionTypes.GET_COMMENTS_SUCCESS,
        error: error
    }
}

export const toggleCommentReply = (parentCommentId) => {
    return {
        type: actionTypes.TOGGLE_COMMENT_REPLY,
        parentCommentId: parentCommentId
    }
}
