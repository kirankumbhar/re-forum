import React, { Component } from 'react';
import { Comment, Avatar, Form, Button } from 'antd'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

import reactQuillStyles from '../../containers/CreatePost/CreatePost.module.css';
import * as actions from '../../store/actions/index';
import { connect } from 'react-redux';

class CommentForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            commentText: '',
        }
        this.updateCommentText = this.updateCommentText.bind(this)
    }

    updateCommentText(value) {
        this.setState({ commentText: value })
    }

    addComment = () => {
        let parentCommentId = '';

        if (this.props.parentCommentId) {
            parentCommentId = this.props.parentCommentId;
        }
        let commentData = {
            author: "John Doe",
            comment: this.state.commentText,
            likes: 0,
            last_modified_at: "just now",
            parentCommentId: parentCommentId
        }
        this.props.onCreatecomment(this.props.postData.id, parentCommentId, commentData);
        // this.setState({commentText: ''});

    }

    quillModules = {
        toolbar: [
            [{ 'header': [1, 2, false] }],
            ['bold', 'italic', 'underline', 'strike', 'blockquote'],
            [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
            ['link', 'image'],
            ['clean']
        ],
    }

    quillFormats = [
        'header',
        'bold', 'italic', 'underline', 'strike', 'blockquote',
        'list', 'bullet', 'indent', 'link', 'image'
    ]

    render() {
        return (
            <Comment
                avatar={
                    <Avatar>JD</Avatar>
                }
                content={
                    <div>
                        <Form.Item>
                            <ReactQuill
                                className={reactQuillStyles.ReactQuill}
                                formats={this.quillFormats}
                                theme="snow"
                                modules={this.quillModules}
                                value={this.state.commentText}
                                onChange={this.updateCommentText}
                            />
                        </Form.Item>
                        <Form.Item>
                            <Button
                                htmlType="button"
                                loading={this.props.parentId === this.props.parentCommentId ? this.props.commentLoading : false}
                                onClick={this.addComment} type="primary"
                                disabled={
                                    this.state.commentText.replace(/<(.|\n)*?>/g, '').trim().length === 0 ? true : false
                                }
                            >
                                Add Comment
                            </Button>
                        </Form.Item>
                    </div>
                }
            />
        );
    }
}

const mapStateToProps = (state) => {
    return {
        postData: state.post.post,
        commentLoading: state.post.commentLoading,
        parentId: state.post.parentCommentId
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onCreatecomment: (postId, parentCommentId, commentData) => dispatch(actions.createComment(postId, parentCommentId, commentData))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentForm);