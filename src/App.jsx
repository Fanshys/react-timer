import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from './components/header/header';
import Timers from './components/timers/timers';
import Checklists from './components/checklists/checklists';
import Notice from './components/notice/notice';
import Auth from './components/auth/auth';
import { useDispatch } from 'react-redux';
import { loadTimers } from './store/timers/actions';
import { loadLists } from './store/checklists/actions';

function App() {
  const dispatch = useDispatch()
  dispatch(loadTimers())
  dispatch(loadLists())

  return (
    <Fragment>
      <Notice />
      <Router>
        <Header authorized={false} />
        <Switch>
          <Route path={["/checklist/:id", "/checklist"]}>
            <Checklists />
          </Route>
          <Route path="/auth">
            <Auth authorized={true} />
          </Route>
          <Route path="/">
            <Timers />
          </Route>
        </Switch>
      </Router>
    </Fragment>
  );
}

export default App;
