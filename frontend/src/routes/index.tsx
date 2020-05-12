import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Board from '../pages/Board';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" component={Board} exact />
  </Switch>
);

export default Routes;
