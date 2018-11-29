import React from 'react';
import MyNavbar from './MyNavbar';
import axious from 'axios';

export default class Dashboard extends React.Component {

    state ={
        welcomeMessage: "",
        user: ""
    }

   componentWillMount(){
       axious.get('/api/user', {
        //    user: this.state.firstname
       }).then(res => {
            console.log(res)
            this.setState({
                welcomeMessage: "Welcome"
                // user: res.
            })
       }).catch(error => {
           console.log(error)
        //    window.location.href="/"
       });
       //pull in user info and set state in .then - Welcome user 
   }

   render(){
       return(
           <MyNavbar user={this.state.user} />
       )
   }
}
