import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

// import Loader from './components/loader/loader';
import Header from './components/header/header';
import Timers from './pages/timers/timers';
import Checklist from './pages/checklist/checklist';

function App() {
  return (
    <div className="App">
      {/* <Loader /> */}
      <Router>
        <Header authorized={true}/>
        <Switch>
          <Route path="/checklist">
            <Checklist />
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
