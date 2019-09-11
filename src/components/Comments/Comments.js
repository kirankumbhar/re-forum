import React from 'react';
import { Comment, Avatar, Tooltip, Icon } from 'antd';

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
  return comments.map((comment) => { 
    return (
        <Comment
          actions={[
            <span key="comment-basic-like">
              <Tooltip title="Like">
                <Icon
                  type="like"
                  theme='outlined'
                  onClick={comment.like}
                />
              </Tooltip>
              <span style={{ paddingLeft: 8, cursor: 'auto' }}>{comment.likes}</span>
            </span>,
            <span key="comment-nested-reply-to">Reply to</span>
          ]}
          author={<a>{comment.author}</a>}
          avatar={
            <Avatar>JD</Avatar>
          }
          content={
            <p>
              {comment.comment}
            </p>
          }
        >
        </Comment>
    );
  });
}

export default Comments;