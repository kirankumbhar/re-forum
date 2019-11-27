import React from 'react';
import {Skeleton } from 'antd';

import PostComment from '../../containers/PostComment/PostComment';

const Comments = (props) => {
  let comments = null;
  if (props.comments) {
    console.log('rendering comments');
    
    comments = props.comments.map((comment, index) => {
      return (
        <PostComment comment={comment} id={index} />
      );
    });
  }

  return (
      <Skeleton loading={props.loading} avatar>
        {comments}
      </Skeleton>
  );
}

export default Comments;