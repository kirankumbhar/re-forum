import * as actionTypes from './actionTypes';
import axios from '../../axios';

export const setPosts = (postData) => {
    return {
        type: actionTypes.SET_POSTS,
        posts: postData
    }
}

export const initPosts = () => {
   return dispatch => {
       axios.get('/posts/')
        .then(response => {
            dispatch(setPosts(response.data));
        })
        .catch(error => {
            //dispatch failed action
        })
   } 
}