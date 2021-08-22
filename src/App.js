import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import SideMenu from './Navigation/SideMenu';
import Home from './Pages/Home.js';
import Artists from './Pages/Artists';
import OrderCommission from './Pages/OrderCommission';

const App = () => {
  return (
    <div className="App">
      <Router>
      <main>
        <div className="left">
        <SideMenu />
        </div>
        <div className="right">
          <Switch>
            <Route path="/home" exact><Home/></Route>
            <Route path="/artists" exact><Artists/></Route>
            <Route path="/order-commission"><OrderCommission/></Route>
          </Switch>
        </div>
        </main>
      </Router>
    </div>
  );
}

export default App;
