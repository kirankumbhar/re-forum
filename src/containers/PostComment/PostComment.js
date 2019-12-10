import React, { Component } from 'react';
import { Comment, Tooltip, Icon, Avatar } from 'antd';
import { connect } from 'react-redux'

import CommentForm from '../CommentForm/CommentForm';
import * as actions from '../../store/actions/index';
import * as constants from '../../constants';
import { getUsernameInitials } from '../../utils'

// PostComment component is wrapper over antd Commentto handle reply and likes 
class PostComment extends Component {
    state = {
        showReplyComment: false
    }

    replyClickHandler = () => {
        this.setState({showReplyComment: !this.state.showReplyComment})
        this.props.onToggleReply(this.props.id)
    }

    render () {
        let replyComments = null

        if (this.props.reply) {
            // if replies exist loop through it without having 'reply to' button
            replyComments = this.props.reply.map((reply) => {
                return <Comment
                key={reply.id}
                actions={[
                    <span key={"comment-basic-like "+ reply.id}>
                    <Tooltip title="Like">
                        <Icon
                        type="like"
                        theme='outlined'
                        onClick={this.props.comment.like}
                        />
                    </Tooltip>
                    <span style={{ paddingLeft: 8, cursor: 'auto' }}>{reply[constants.COMMENT_LIKES]}</span>
                    </span>
                ]}
                author={<a href="javascript:void(0);">{reply[constants.COMMENT_AUTHOR]}</a>}
                avatar={
                    <Avatar>{getUsernameInitials(reply[constants.COMMENT_AUTHOR])}</Avatar>
                }
                content={
                    <div dangerouslySetInnerHTML={{__html: reply[constants.COMMENT_BODY]}}/>
                }
            ></Comment>
            });
        }
        
        return(
            <Comment
                key={this.props.id}
                actions={[
                    <span key={"comment-basic-like "+ this.props.id}>
                    <Tooltip title="Like">
                        <Icon
                        type="like"
                        theme='outlined'
                        onClick={this.props.comment.like}
                        />
                    </Tooltip>
                    <span style={{ paddingLeft: 8, cursor: 'auto' }}>{this.props.comment[constants.COMMENT_LIKES]}</span>
                    </span>,
                    <span onClick={(event) => this.replyClickHandler(event)} id={this.props.id} key={"comment-nested-reply-to" + this.props.id}>Reply to</span>
                ]}
                author={<a href="javascript:void(0);">{this.props.comment[constants.COMMENT_AUTHOR]}</a>}
                avatar={
                    <Avatar>{getUsernameInitials(this.props.comment[constants.COMMENT_AUTHOR])}</Avatar>
                }
                content={
                    <div dangerouslySetInnerHTML={{__html: this.props.comment[constants.COMMENT_BODY]}}/>
                }
            >
                {this.state.showReplyComment && this.props.parentCommentId === this.props.id ? <CommentForm parentCommentId = {this.props.id}/> : null}
                { replyComments }
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