import * as actionTypes from './actionTypes';
import axios from '../../axios';

export const setPost = (postData) => {
    return {
        type: actionTypes.SET_POST,
        post: postData
    }
}

export const initPost = (id) => {
    return dispatch => {
        axios.get('./posts/' + id + '.json' )
            .then(response => {
                dispatch(setPost(response.data));
            })
            .catch(error => {
                console.log(error);
            })
    }
}