import React, { Component } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import './app.css';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import NewUser from './components/NewUser';

export default class App extends Component {

  render() {
    return (
      
      <BrowserRouter>  
      <Switch>      
        <Route exact path="/" component={Home}/>
        <Route exact path="/NewUser" component={NewUser}/>    
        <Route exact path="/dashboard" component={Dashboard}/>
      </Switch>
      </BrowserRouter>
    )
  }
}
