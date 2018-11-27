import React from 'react';
import axios from 'axios';
import './Home.css';

export default class Home extends React.Component {
    state = {
        username: "",
        password: "",
        error: ""
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }

    submitClick = (event) => {
        event.preventDefault();
        console.log(this.state.username, "username");
        console.log(this.state.password, "password");
        axios.post('/api/login', {
            username: this.state.username,
            password: this.state.password
        }).then(res => {
            const token = res.data.token;
            localStorage.setItem('token', token);
            console.log(res, "response from login");
        });
    }

    render() {
    return (
        <div>
            <div className="limiter">
            <div className="container-login100">
                <div className="wrap-login100">
                    <div className="login100-pic">
                        <img src="http://www.bumblebee.com/wp-content/themes/bumblebee-responsive/library/img/bb-recipe-ia-hero.png" alt="IMG"/>
                    </div>
    
                    <form className="login100-form validate-form">
                        <span className="login100-form-title">
                            Member Login
                        </span>
    
                        <div className="wrap-input100 validate-input" data-validate = "Valid email is required: ex@abc.xyz">
                            <input className="input100 username" type="text" name="email" placeholder="Email" value={this.state.username}
                                            onChange={event => this.handleChange(event)}/>
                            <span className="focus-input100"></span>
                            <span className="symbol-input100">
                                <i className="fa fa-envelope" aria-hidden="true"></i>
                            </span>
                        </div>
    
                        <div className="wrap-input100 validate-input" data-validate = "Password is required">
                            <input className="input100 password" type="password" name="pass" placeholder="Password" value={this.state.password}
                                            onChange={event => this.handleChange(event)}/>
                            <span className="focus-input100"></span>
                            <span className="symbol-input100">
                                <i className="fa fa-lock" aria-hidden="true"></i>
                            </span>
                        </div>
                        
                        <div className="container-login100-form-btn">
                            <button className="login100-form-btn submit" onClick={event => this.submitClick(event)}>
                                Login
                            </button>
                        </div>
    
                        <div className="text-center p-t-12">
                            <span className="txt1">
                                Forgot
                            </span>
                            <a className="txt2" href="#">
                                Username / Password?
                            </a>
                        </div>
    
                        <div className="text-center p-t-136">
                            <a className="txt2" href="#">
                                Create your Account
                                <i className="fa fa-long-arrow-right m-l-5" aria-hidden="true"></i>
                            </a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        </div>
    )
}
}


