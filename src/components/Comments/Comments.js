import React from 'react';
import {Skeleton } from 'antd';

import PostComment from '../../containers/PostComment/PostComment';
import * as constants from '../../constants';

const Comments = (props) => {
  let comments = null;
  let commentReply = {};
  if (props.comments) {
    
    
    comments = props.comments.map((comment, index) => {
      if (comment[constants.PARENT_COMMENT_ID] === null) {
        return (
          <PostComment comment={comment} key={index} id={index} />
        );
      }
      else {
        commentReply[comment[constants.PARENT_COMMENT_ID]] = comment;
      }
    });
    if (comments) {
      comments = comments.map((comment, index) => {
        if (comment) {
          
          if (comment.props.id in commentReply) {
            let reply = commentReply[comment.props.id];
            
            return React.cloneElement(comment, {reply: reply})
          }
        }
        return comment;
      });
      console.log(comments);
      
    }
  }

  return (
      <Skeleton loading={props.loading} avatar>
        {comments}
      </Skeleton>
  );
}

export default Comments;