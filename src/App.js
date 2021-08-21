import React from 'react';
import './App.css';
import SideMenu from './Navigation/SideMenu';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

const App = () => {
  return (
    <div className="App">
      <h1>HACK THE 6IX HACKATHON 2021</h1>
      <Router>
        <SideMenu/>
        <Switch>
          <Route path='/' />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
