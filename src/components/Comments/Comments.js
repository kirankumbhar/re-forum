import React from 'react';
import { Comment, Avatar, Tooltip, Icon } from 'antd';

import CommentForm from './CommentForm/CommentForm';

//dummy comment data
let comments = [];
for (let i = 0; i < 6; i++) {
  comments.push({
    id: i,
    comment: "This is comment on the lorem ipsum post Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Senectus et netus et malesuada. Duis ultricies lacus sed turpis tincidunt. Pellentesque sit amet porttitor eget dolor. Quam nulla porttitor massa id neque. Lacus sed turpis tincidunt id aliquet risus. Ultrices vitae auctor eu augue ut lectus arcu bibendum at.",
    author: "John Doe",
    likes: "4",
    last_modified_at: "a day ago"
  });
}

const Comments = (props) => {
  console.log(props);
  
  return comments.map((comment) => {
    console.log(comment.id);
    
    return (
        <Comment
          actions={[
            <span key={"comment-basic-like "+ comment.id}>
              <Tooltip title="Like">
                <Icon
                  type="like"
                  theme='outlined'
                  onClick={comment.like}
                />
              </Tooltip>
              <span style={{ paddingLeft: 8, cursor: 'auto' }}>{comment.likes}</span>
            </span>,
            <span onClick={(event) => props.commentReplyHandler(event)} id={comment.id} key={"comment-nested-reply-to" + comment.id}>Reply to</span>
          ]}
          author={<a href="#">{comment.author}</a>}
          avatar={
            <Avatar>JD</Avatar>
          }
          content={
            <p>
              {comment.comment}
            </p>
          }
        >
          {props.commentReplyId === comment.id.toString() ? <CommentForm/> : null}
        </Comment>
    );
  });
}

export default Comments;