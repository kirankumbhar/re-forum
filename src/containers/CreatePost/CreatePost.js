import React, {Component} from 'react';
import { connect } from 'react-redux';
import {Redirect} from 'react-router-dom';
import { Form, Input, Button } from 'antd';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

import styles from './CreatePost.module.css';
import * as actions from '../../store/actions';
class CreatePost extends Component {

    constructor(props) {
        super(props)
        this.state = { 
          description: '', 
        } // You can also pass a Quill Delta here
        this.updateDescription = this.updateDescription.bind(this)
        
      }

    updateDescription(value) {
        this.setState({description: value})
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

    postSubmitHandler = (event) => {
        const form = this.props.form;
        event.preventDefault();
        form.validateFields((err, values) => {
            if (!err) {
                const title = values.title;
                const description = this.state.description;
                this.props.createPost({
                    title: title,
                    description: description,
                    author: "john Doe",
                    likes: '0',
                    views: '0',
                });
            }
        });
    }

    render() {
        if (this.props.postCreated) {
            return <Redirect to={ '/post/' + this.props.postCreatedId} />
        }
        const { getFieldDecorator } = this.props.form;
        return (
            <Form className={styles.Form} layout="vertical" onSubmit={this.postSubmitHandler}>
              <Form.Item label="Title">
                {getFieldDecorator('title', {
                  rules: [{ required: true, message: 'Please provide the title of the post!' }],
                })(<Input />)}
              </Form.Item>
              <Form.Item label="Description">
                <ReactQuill className={styles.ReactQuill} formats={this.quillFormats} theme="snow" modules={this.quillModules} value={this.state.description} onChange={this.updateDescription} />
              </Form.Item>
              <Form.Item>
                    {
                        this.props.postLoading ? 
                        <Button type="primary" htmlType="submit" loading>
                            Submitting
                        </Button>
                        :
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    }
              </Form.Item>
            </Form>
        );
    }
}

const mapStateToProps = state => {
    return {
        postLoading: state.createdPost.loading,
        postCreated: state.createdPost.postCreated,
        postCreatedId: state.createdPost.postCreatedId
    }
}

const mapDispatchToProps = dispatch => {
    return {
        createPost: (postData) => dispatch(actions.createPost(postData))
    }
}

const PostForm = Form.create({name: 'postForm'})(CreatePost);

export default connect(mapStateToProps, mapDispatchToProps)(PostForm);