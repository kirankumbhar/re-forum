import React from 'react';
import { Route, Switch } from 'react-router-dom';

import BaseLayout from './containers/BaseLayout/BaseLayout';
import HomePage from './containers/HomePage/HomePage';
function App() {
  return (
      <BaseLayout>
        <Switch>
          <Route path="/" exact component={HomePage} />
        </Switch>
      </BaseLayout>
  );
}

export default App;
