import * as actionTypes from './actionTypes';
import axios from '../../axios';

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

export const getPost = (id) => {
    return dispatch => {
        dispatch(getPostStart());
        axios.get('./posts/' + id + '.json' )
            .then(response => {
                dispatch(getPostSuccess(response.data));
            })
            .catch(error => {
                dispatch(getPostFail(error));
            })
    }
}

