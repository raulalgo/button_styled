'use strict';

import React                       from 'react';
import {Router, Route, IndexRoute} from 'react-router';
import CreateBrowserHistory        from 'history/lib/createBrowserHistory';

import App                         from './App';
import HomePage                    from './pages/HomePage';
import SearchPage                  from './pages/SearchPage';
import NotFoundPage                from './pages/NotFoundPage';
import LevelPage                   from './pages/LevelPage';


export default (
  <Router history={CreateBrowserHistory()}>
    <Route path="/" component={App}>

      <IndexRoute component={LevelPage} />

      <Route path="/" component={LevelPage} />
      <Route path="/search" component={SearchPage} />

      <Route path="/level" component={LevelPage} />

      <Route path="*" component={NotFoundPage} />

    </Route>
  </Router>
);
