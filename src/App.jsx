import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// import Loader from './components/loader/loader';
import Header from './components/header/header';
import Timers from './components/timers/timers';
import Checklists from './components/checklists/checklists';

function App() {
  return (
    <div className="App">
      {/* <Loader /> */}
      <Router>
        <Header authorized={true} />
        <Switch>
          <Route path={["/checklist/:id", "/checklist"]}>
            <Checklists />
          </Route>
          <Route path="/">
            <Timers />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
