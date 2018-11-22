import React, { Component } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import './app.css';
import Login from './components/Login';
import Home from './components/Home';
import Auth from './components/Auth';
import newUser from './components/newUser';


export default class App extends Component {

  render() {
    return (
      // <Login/>
      <BrowserRouter>
      <Switch>
        <Route exact path="/NewUser" component={newUser}/>
        <Route exact path="/Login" component={Login}/>
        <Route exact path="/Auth" component={Auth}/>
        <Route exact path="/" component={Home} />
      </Switch>
      </BrowserRouter>
    )
  }
}
