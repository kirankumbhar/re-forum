import React, {Component} from 'react';
import { Comment, Avatar, Form, Button } from 'antd'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

class CommentForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            commentText: '',
        }
        this.updateCommentText = this.updateCommentText.bind(this)
    }

    updateCommentText(value) {
        this.setState({commentText: value})
    }

    quillModules = {
        toolbar: [
          [{ 'header': [1, 2, false] }],
          ['bold', 'italic', 'underline','strike', 'blockquote'],
          [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
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
                avatar = {
                    <Avatar>JD</Avatar>
                }
                content = {
                    <div>
                        <Form.Item>
                        <ReactQuill formats={this.quillFormats} theme="snow" modules={this.quillModules} value={this.state.commentText} onChange={this.updatecommentText} /> 
                        </Form.Item>
                        <Form.Item>
                            <Button htmlType="button" loading={this.props.loading} onClick={this.props.onClick} type="primary">
                                Add Comment
                            </Button>
                        </Form.Item>
                    </div>
                }
            />
        );
    }
}

export default CommentForm;