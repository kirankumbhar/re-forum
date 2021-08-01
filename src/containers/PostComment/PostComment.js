import React, { Component } from 'react';
import { connect } from 'react-redux'

import CommentForm from '../CommentForm/CommentForm';
import Comment from '../../components/Comments/Comment/Comment';
import * as actions from '../../store/actions/index';
import * as constants from '../../constants';

// PostComment component is wrapper over antd Comment to handle reply and likes 
class PostComment extends Component {
    state = {
        showReplyComment: false
    }

    replyClickHandler = () => {
        this.setState({ showReplyComment: !this.state.showReplyComment })
        this.props.onToggleReply(this.props.id)
    }

    render() {
        let replyComments = null

        if (this.props.reply) {
            console.log(this.props.reply)
            // if replies exist loop through it without having 'reply to' button
            replyComments = this.props.reply.map((reply) => {
                return (
                    <Comment
                        id={reply.id}
                        authorName={reply[constants.COMMENT_AUTHOR]}
                        commentBody={reply[constants.COMMENT_BODY]}
                        likes={reply[constants.COMMENT_LIKES]}
                    ></Comment>

                );
            });
        }

        return (
            <Comment
                id={this.props.id}
                authorName={this.props.comment[constants.COMMENT_AUTHOR]}
                commentBody={this.props.comment[constants.COMMENT_BODY]}
                likes={this.props.comment[constants.COMMENT_LIKES]}
                replyClickHandler={this.replyClickHandler}
            >
                {this.state.showReplyComment && this.props.parentCommentId === this.props.id ? <CommentForm parentCommentId={this.props.id} /> : null}
                {replyComments}
            </Comment>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        parentCommentId: state.post.parentCommentId
    }
}

const mapDisatchToProps = (dispatch) => {
    return {
        onToggleReply: (parentCommentId) => dispatch(actions.toggleCommentReply(parentCommentId))
    }
}

export default connect(mapStateToProps, mapDisatchToProps)(PostComment);