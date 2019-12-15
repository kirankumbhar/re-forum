import React from 'react';
import { Route, Switch } from 'react-router-dom';

import BaseLayout from './containers/BaseLayout/BaseLayout';
import HomePage from './containers/HomePage/HomePage';
import Register from './containers/Auth/Register/Register';
import Login from './containers/Auth/Login/Login';
import PostDetails from './containers/PostDetails/PostDetails';
import CreatePost from './containers/CreatePost/CreatePost';

function App() {
  return (
      <BaseLayout>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/signup" exact component={Register} />
          <Route path="/login" exact component={Login} />
          <Route path="/post/create" component={CreatePost}/>
          <Route path='/post/:id' component={PostDetails} />
        </Switch>
      </BaseLayout>
  );
}

export default App;
