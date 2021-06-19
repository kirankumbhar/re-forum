import * as actionTypes from './actionTypes';
import axios from '../../axios';



export const createPostStart = () => {
    return {
        type: actionTypes.CREATE_POST_START
    }
}

export const createPostSuccess = (postId) => {
    return {
        type: actionTypes.CREATE_POST_SUCCESS,
        postId: postId
    }
}

export const createPostFail = (error) => {
    return {
        type: actionTypes.CREATE_POST_FAIL,
        error: error
    }
}

export const createPost = (postData) => {
    return dispatch => {
        dispatch(createPostStart());
        axios.post('/posts/', postData).then(response => {
            dispatch(createPostSuccess(response.data.name));
        }).catch(error => {
            dispatch(createPostFail(error));
        });
    }
}