import React, { Component } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import './app.css';
import Login from './components/Login';
import Home from './components/Home';
import Protected from './components/Protected';
import NewUser from './components/NewUser';
import Navbar from './components/Navbar';


export default class App extends Component {

  render() {
    return (
      

      <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/NewUser" component={NewUser}/>
        <Route exact path="/Login" component={Login}/>      
        <Route exact path="/protected" component={Protected}/>      
      </Switch>
      </BrowserRouter>
    )
  }
}
