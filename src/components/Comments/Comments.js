import React, {Fragment} from 'react';
import { Comment, Avatar, Tooltip, Icon, Skeleton } from 'antd';

import CommentForm from '../../containers/CommentForm/CommentForm';
import PostComment from '../../containers/PostComment/PostComment';

const Comments = (props) => {
  let comments = null;
  if (props.comments) {
    comments = props.comments;
    console.log('rendering comments');
    
    return comments.map((comment, index) => {
      return (
        <PostComment comment={comment} id={index} />
      );
    });
  }

  return (
    <Fragment>
      {props.commentLoading ? <Skeleton loading={props.commentLoading} avatar></Skeleton> : null }
      <Skeleton loading={props.loading} avatar>
        {comments}
      </Skeleton>
    </Fragment>
    );
}

export default Comments;