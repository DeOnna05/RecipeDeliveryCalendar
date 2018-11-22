import React, { Component } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import './app.css';
import Login from './components/Login';
import Home from './components/Home';
import Auth from './components/Auth';
import Protected from './components/Protected';
import newUser from './components/NewUser';


export default class App extends Component {

  render() {
    return (
      // <Login/>
      <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/NewUser" component={newUser}/>
        <Route exact path="/Login" component={Login}/>
        <Auth>
        <Route exact path="/protected" component={Protected}/>
        </Auth>
       
        
      </Switch>
      </BrowserRouter>
    )
  }
}
