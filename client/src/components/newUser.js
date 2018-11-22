import React from 'react';
import axios from 'axios';
import './NewUser.css';


export default class Login extends React.Component {
    state = {
        firstname:"",
        lastname:"",
        username:"",
        password:""
    }

handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }

submitClick = (event) => {
   console.log('NewUser OnClick Working')
}

    render() {
        return (
            <div className="center">
                <div className="card">
                    <h1>Sign Up</h1>
                    <form>
                        <input
                            className="firstname"
                            placeholder="First Name"
                            id="firstname"
                            name="firstname"
                            type="text"
                            value={this.state.firstname}
                            onChange={event=>this.handleChange(event)}
                        />
                        <input
                            className="lastname"
                            placeholder="Last Name"
                            id="lastname"
                            name="lastname"
                            type="text"
                            value={this.state.lastname}
                            onChange={event=>this.handleChange(event)}
                        />
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