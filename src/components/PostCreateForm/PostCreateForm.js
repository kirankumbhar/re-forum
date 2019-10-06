import React, { Component } from 'react';
import { Modal, Form, Input } from 'antd';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

import styles from './PostCreateForm.module.css';

const postCreateForm = Form.create({ name: 'form_in_modal' })(
    class extends Component {

      constructor(props) {
        super(props)
        this.state = { text: '' } // You can also pass a Quill Delta here
        this.handleChange = this.handleChange.bind(this)
        console.log(this.modules);
        
      }

      handleChange(value) {
        this.setState({ text: value });
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
        const { visible, onCancel, onSubmit, form } = this.props;
        const { getFieldDecorator } = form;
        return (
          <Modal
            visible={visible}
            title="Create a new Post"
            okText="Submit"
            onCancel={onCancel}
            onOk={onSubmit}
            maskClosable={false}
            keyboard={false}
            width={800}
          >
            <Form layout="vertical">
              <Form.Item label="Title">
                {getFieldDecorator('title', {
                  rules: [{ required: true, message: 'Please provide the title of the post!' }],
                })(<Input />)}
              </Form.Item>
              <Form.Item label="Description">
                <ReactQuill className={styles.ReactQuill} formats={this.quillFormats} theme="snow" modules={this.quillModules} value={this.state.text || ''} onChange={this.handleChange} />
              </Form.Item>
            </Form>
          </Modal>
        );
      }
    },
  );

  export default postCreateForm;