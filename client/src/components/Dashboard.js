import React from 'react';
import MyNavbar from './MyNavbar';
import axious from 'axios';

export default class Dashboard extends React.Component {

    state ={
        welcomeMessage: "",
        user: ""
    }

   componentDidMount(){
       axious.get()
       //pull in user info and set state in .then - Welcome user
       //.catch needs to redirect to home page
       // (window.location.href="/")   
   }

   render(){
       return(
           <MyNavbar user={this.state.user} />
       )
   }
}
