import React, { Fragment } from 'react';

import {
    Form,
    Input,
    Button,
    Alert,
    Row,
  } from 'antd';

import styles from './Register.module.css';
import * as actions from '../../../store/actions/';
import * as constants from '../../../constants';

import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
  
class RegistrationForm extends React.Component {
  state = {
    confirmDirty: false,
    autoCompleteResult: [],
  };

  handleSubmit = e => {
    e.preventDefault();
    let registerData = {}
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        registerData[constants.USERNAME] = values.username || ''
        registerData[constants.FIRST_NAME] = values.firstName || ''
        registerData[constants.LAST_NAME] = values.lastName || ''
        registerData[constants.EMAIL] = values.email || ''
        registerData[constants.PASSWORD] = values.password || ''
        this.props.onInitRegister(registerData);
      }
    });
  };

  handleConfirmBlur = e => {
    const { value } = e.target;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  };

  compareToFirstPassword = (rule, value, callback) => {
    const { form } = this.props;
    if (value && value !== form.getFieldValue('password')) {
      callback('Two passwords that you enter is inconsistent!');
    } else {
      callback();
    }
  };

  validateToNextPassword = (rule, value, callback) => {
    const { form } = this.props;
    if (value && this.state.confirmDirty) {
      form.validateFields(['confirm'], { force: true });
    }
    callback();
  };


  render() {
    const { getFieldDecorator } = this.props.form;

    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
      },
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0,
        },
        sm: {
          span: 16,
          offset: 8,
        },
      },
    };

    if (this.props.isUserRegistered) {
      return <Redirect to='/signin'/>
    }
    
    let registrationError = null;
    if (this.props.error) {
      registrationError = <Alert
      message="Failed to Register!"
      description="Oops! Unable to register right now. Please try again later."
      type="error"
      showIcon
      className={styles.Alert}
    />
    }

    return (
      <Fragment>
        <h2 style={{ textAlign: "center"}}>Sign Up</h2>
        <Row type="flex" justify="center" style={{ flexWrap: "wrap" }}>
        <Form {...formItemLayout} style={{ width: '600px'}} onSubmit={this.handleSubmit}>
        <Form.Item label="First Name" labelAlign="left">
          {getFieldDecorator('firstName', {
            rules: [
              {
                required: true,
                message: 'Please input your First Name',
              },
            ],
          })(<Input />)}
        </Form.Item>
        <Form.Item label="Last Name" labelAlign="left">
          {getFieldDecorator('lastName', {
            rules: [
              {
                required: true,
                message: 'Please input your Last Name',
              },
            ],
          })(<Input />)}
        </Form.Item>
        <Form.Item label="Username" labelAlign="left">
          {getFieldDecorator('username', {
            rules: [
              {
                required: true,
                message: 'Please input your username',
              },
            ],
          })(<Input />)}
        </Form.Item>
        <Form.Item label="E-mail" labelAlign="left">
          {getFieldDecorator('email', {
            rules: [
              {
                type: 'email',
                message: 'The input is not valid E-mail!',
              },
              {
                required: true,
                message: 'Please input your E-mail!',
              },
            ],
          })(<Input />)}
        </Form.Item>
        <Form.Item label="Password" hasFeedback labelAlign="left">
          {getFieldDecorator('password', {
            rules: [
              {
                required: true,
                message: 'Please input your password!',
              },
              {
                validator: this.validateToNextPassword,
              },
            ],
          })(<Input.Password />)}
        </Form.Item>
        <Form.Item label="Confirm Password" hasFeedback labelAlign="left">
          {getFieldDecorator('confirm', {
            rules: [
              {
                required: true,
                message: 'Please confirm your password!',
              },
              {
                validator: this.compareToFirstPassword,
              },
            ],
          })(<Input.Password onBlur={this.handleConfirmBlur} />)}
        </Form.Item>
        <Form.Item {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit" className={styles.MR1em} loading={this.props.loading}>
            Sign Up
          </Button>
          Already have an account? <a href="/signin">Log in!</a>
        </Form.Item>
        {registrationError}
      </Form>
      </Row>
    </Fragment>
  );
  }
}
  
const WrappedRegistrationForm = Form.create({ name: 'register' })(RegistrationForm);

const mapStateToProps = (state) => {
  return {
    isUserRegistered: state.auth.isUserRegistered,
    loading: state.auth.loading,
    error: state.auth.error
  }
}

const mapDispachToProps = (dispatch) => {
  return {
    onInitRegister: (data) => dispatch(actions.registerUser(data)) 
  }
}

export default connect(mapStateToProps, mapDispachToProps)(WrappedRegistrationForm);