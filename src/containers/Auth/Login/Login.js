import React, { Fragment } from 'react';
import { Form, Icon, Input, Button, Alert } from 'antd';

import styles from './Login.module.css'
import { connect } from 'react-redux';

class NormalLoginForm extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };

  render() {
    let regsiterRedirectMessage = null;
    if (this.props.history.action === "REPLACE" && this.props.isUserRegistered) {
      regsiterRedirectMessage = <Alert
      message="Registration Successful"
      description="Thank you for registering. You can login now"
      type="success"
      showIcon
      className={styles.Alert}
    />
    }

    
    
    const { getFieldDecorator } = this.props.form;
    return (
        <Fragment>
            {regsiterRedirectMessage}
            <h2 className={styles.Header}>Log In</h2>
            <Form onSubmit={this.handleSubmit} className={styles.Login}>
                <Form.Item>
                {getFieldDecorator('username', {
                    rules: [{ required: true, message: 'Please input your username!' }],
                })(
                    <Input
                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    placeholder="Username"
                    />,
                )}
                </Form.Item>
                <Form.Item>
                {getFieldDecorator('password', {
                    rules: [{ required: true, message: 'Please input your Password!' }],
                })(
                    <Input
                    prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    type="password"
                    placeholder="Password"
                    />,
                )}
                </Form.Item>
                <Form.Item>
                <Button type="primary" htmlType="submit" className={styles.MR1em}>
                    Log in
                </Button>
                Or <a href="/signup">register now!</a>
                </Form.Item>
            </Form>
      </Fragment>
    );
  }
}

const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(NormalLoginForm);

const mapStateToProps = (state) => {
  return {
    isUserRegistered: state.auth.isUserRegistered
  }
}

export default connect(mapStateToProps)(WrappedNormalLoginForm);