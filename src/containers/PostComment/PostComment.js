import React, { Component } from 'react';
import { Comment, Tooltip, Icon, Avatar } from 'antd';
import { connect } from 'react-redux'

import CommentForm from '../CommentForm/CommentForm';
import * as actions from '../../store/actions/index';

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
                    <span style={{ paddingLeft: 8, cursor: 'auto' }}>{this.props.comment.likes}</span>
                    </span>,
                    <span onClick={(event) => this.replyClickHandler(event)} id={this.props.id} key={"comment-nested-reply-to" + this.props.id}>Reply to</span>
                ]}
                author={<a href="javascript:void(0);">{this.props.comment.author}</a>}
                avatar={
                    <Avatar>JD</Avatar>
                }
                content={
                    <div dangerouslySetInnerHTML={{__html: this.props.comment.comment}}/>
                }
            >
                {this.state.showReplyComment && this.props.parentCommentId === this.props.id ? <CommentForm parentCommentId = {this.props.id}/> : null}
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