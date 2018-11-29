import React from 'react';
import MyNavbar from './MyNavbar';
import axios from 'axios';

export default class Dashboard extends React.Component {

    state ={
        welcomeMessage: "",
        user: ""
    }

   componentDidMount(){
       axios.get('/api/user', {
            headers: {Authorization: localStorage.getItem('token')}
       }).then(res => {
            console.log(res)
            this.setState({
                welcomeMessage: "Welcome"
                
            })
       }).catch(error => {
           console.log(error)
        //    window.location.href="/"
       });
       //pull in user info and set state in .then - Welcome user 
   }

   render(){
       return(
           <MyNavbar user={this.state.user}/>
       )
   }
}
