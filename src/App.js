import React from 'react';
import { Route, Switch } from 'react-router-dom';

import BaseLayout from './containers/BaseLayout/BaseLayout';
import HomePage from './containers/HomePage/HomePage';
import PostDetails from './containers/PostDetails/PostDetails';
import CreatePost from './containers/CreatePost/CreatePost';

function App() {
  return (
      <BaseLayout>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/post/create" component={CreatePost}/>
          <Route path='/post/:id' component={PostDetails} />
        </Switch>
      </BaseLayout>
  );
}

export default App;
