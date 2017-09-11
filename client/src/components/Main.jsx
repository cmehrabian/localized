import React from 'react';
import Home from './Home.jsx';
import NotFound from './404.jsx';
import { Switch, Route } from 'react-router-dom';

const Main = (props) => (
  <main style={{width: '100%'}}>
    <Switch>
      <Route exact path='/' render={() => <Home  />} />
      <Route render={() => <NotFound />} />
    </Switch>
  </main>
);

export default Main;
