import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import SideMenu from './Navigation/SideMenu';
import Home from './Pages/Home';

const App = () => {
  return (
    <div className="App">
      <Router>
        <SideMenu/>
        <Switch>
          <Route path='/home'><Home /></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
