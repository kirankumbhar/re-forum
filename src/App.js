import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import BaseLayout from './containers/BaseLayout/BaseLayout';
import HomePage from './containers/HomePage/HomePage';
import Register from './containers/Auth/Register/Register';
import Login from './containers/Auth/Login/Login';
import PostDetails from './containers/PostDetails/PostDetails';
import CreatePost from './containers/CreatePost/CreatePost';
import { connect } from 'react-redux';

function App(props) {
  return (
    <BaseLayout>
      {props.isUserActive ?
        <Switch>
          <Redirect exact from='/login' to='/' />
          <Route path="/post/create" component={CreatePost} />
          <Route path='/post/:id' component={PostDetails} />
          <Route path="/" exact component={HomePage} />
        </Switch> :
        <Switch>
          <Redirect exact from='/' to='/login' />
          <Route path="/signup" exact component={Register} />
          <Route path="/login" exact component={Login} />

        </Switch>
      }
    </BaseLayout>
  );
}

const mapStateToProps = (state) => {
  return {
    isUserActive: state.auth.isUserActive
  }
}

export default connect(mapStateToProps)(App);
