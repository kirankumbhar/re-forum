import React from 'react';
import { Comment, Avatar, Tooltip, Icon, Skeleton } from 'antd';

import CommentForm from '../../containers/CommentForm/CommentForm';

const Comments = (props) => {
  let comments = null;
  if (props.comments) {
    comments = props.comments;
    console.log(comments);
    return comments.map((comment, index) => { 
      return (
        <Comment
          key={index}
          actions={[
            <span key={"comment-basic-like "+ index}>
              <Tooltip title="Like">
                <Icon
                  type="like"
                  theme='outlined'
                  onClick={comment.like}
                />
              </Tooltip>
              <span style={{ paddingLeft: 8, cursor: 'auto' }}>{comment.likes}</span>
            </span>,
            <span onClick={(event) => props.commentReplyHandler(event)} id={index} key={"comment-nested-reply-to" + index}>Reply to</span>
          ]}
          author={<a href="javascript:void(0);">{comment.author}</a>}
          avatar={
            <Avatar>JD</Avatar>
          }
          content={
              <div dangerouslySetInnerHTML={{__html: comment.comment}}/>
          }
        >
          {props.commentReplyId === index.toString() ? <CommentForm parentCommentId = {props.commentReplyId}/> : null}
        </Comment>
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