import React, { Fragment } from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Form } from '@ant-design/compatible';
import '@ant-design/compatible/assets/index.css';
import { Input, Button, Alert } from 'antd';

import styles from './Login.module.css';
import * as actions from '../../../store/actions';
import { connect } from 'react-redux';

class NormalLoginForm extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.onLogin(values);
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
        <h2 className={styles.Header}>Login</h2>
        <Form onSubmit={this.handleSubmit} className={styles.Login}>
          <Form.Item>
            {getFieldDecorator('username', {
              rules: [{ required: true, message: 'Please input your username!' }],
            })(
              <Input
                prefix={<UserOutlined style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="Username"
              />,
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: 'Please input your Password!' }],
            })(
              <Input
                prefix={<LockOutlined style={{ color: 'rgba(0,0,0,.25)' }} />}
                type="password"
                placeholder="Password"
              />,
            )}
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" className={styles.LoginButton}>
              Log in
            </Button>
          </Form.Item>
          <div>No account? <a href="/signup">register now!</a></div>
          {this.props.error ? <div style={{ color: "red" }}>{this.props.error}</div> : null}
        </Form>
      </Fragment>
    );
  }
}

const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(NormalLoginForm);

const mapStateToProps = (state) => {
  return {
    isUserRegistered: state.auth.isUserRegistered,
    isUserActive: state.auth.isUserActive,
    error: state.auth.errorDetails
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onLogin: (loginData) => dispatch(actions.logIn(loginData))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(WrappedNormalLoginForm);