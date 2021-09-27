import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Menu from './navbarfooter/Menu';
import Home from './Home';
import Dashboard from './Dashboard';
import Specifications from './Specifications';
import Other from './Other';

function App() {
  return (
    <div className="App">
      <Menu />
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/dashboard" component={Dashboard}/>
        <Route path="/technical-specifications" component={Specifications}/>
        <Route path="/other" component={Other}/>
      </Switch>
    </div>
  );
}

export default App;
