import React from 'react';
import {Skeleton } from 'antd';

import PostComment from '../../containers/PostComment/PostComment';
import * as constants from '../../constants';

const Comments = (props) => {
  let comments = null;
  let commentReply = {};

  if (props.comments) {
    comments = props.comments.map((comment, index) => {
      let parent_comment_id = constants.PARENT_COMMENT_ID;

      //if comments don't have parent id render as level 1 comment 
      if (comment[parent_comment_id] === null) {
        return (
          <PostComment comment={comment} key={index} id={index} />
        );
      }
      else {
        //if comment is reply to parent, store in comment reply object with
        //parent id as a key and replies as a value in array
        if (comment[parent_comment_id] in commentReply) {
          
          commentReply[comment[parent_comment_id]].push(comment)
        }
        else {
          commentReply[comment[parent_comment_id]] = [comment];
        }
      }
    });

    if (comments) {
      comments = comments.map((comment) => {

        if (comment) {

          // get all replies of the comment and clone PostComment component 
          // for all replies with extra prop called reply.
          if (comment.props.id in commentReply) {
            let replies = []
            for (const reply of commentReply[comment.props.id]) {
              replies.push(reply)
            }
            return React.cloneElement(comment, {reply: replies}) 
          }
        }
        return comment;
      });
    }
  }

  return (
      <Skeleton loading={props.loading} avatar>
        {comments}
      </Skeleton>
  );
}

export default Comments;