import React from 'react';
import { Comment, Avatar } from 'antd';



const Comments = (props) => {
    return (
        <Comment
    actions={[<span key="comment-nested-reply-to">Reply to</span>]}
    author={<a>John Doe</a>}
    avatar={
      <Avatar>JD</Avatar>
    }
    content={
      <p>
        This is comment text
      </p>
    }
  >
  </Comment>
    );
}

export default Comments;