import React from 'react';
import './Login.css';
import loginAPI from '../api/loginAPI';
import UserAuth from './Auth';

export default class Login extends React.Component {
    state = {
        username: "",
        password: ""
    }

handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }

submitClick = (event) => {
    event.preventDefault();
    loginAPI.User(this.state).then(res => localStorage.setItem('cool-jwt', res.data));

        this.setState({
            username:"",
            password:""
        });
        console.log("Login onClick Function working");
    }
  


    render() {
        return (
            <div className="center">
                <div className="card">
                    <h1>Login</h1>
                    <form>
                        <input
                            className="username"
                            placeholder="Email"
                            id="username"
                            name="username"
                            type="text"
                            value={this.state.username}
                            onChange={event=>this.handleChange(event)}
                        />
                        <input
                            className="password"
                            placeholder="Password"
                            name="password"
                            type="password"
                            value={this.state.password}
                            onChange={event=>this.handleChange(event)}
                        />
                        <input
                            className="submit"
                            value="SUBMIT"
                            type="submit"
                            onClick={event=>this.submitClick(event)}
                        />
                    </form>
                </div>
            </div>
        );
    }
}