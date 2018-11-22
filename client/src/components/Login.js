import React from 'react';
import axios from 'axios';
import './Login.css';

export default class Login extends React.Component {
    state = {
        username: "",
        password: "",
        error: ""
    }

handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }

submitClick = (event) => {
    event.preventDefault();
    axios.post('/getToken', {
        username: this.state.username,
        password:this.state.password
    }).then(res => {
        localStorage.setItem('login-jwt', res.data);
        this.props.history.push('/protected')
        }).catch(() => this.setState({
        error: true
    }));
}
  
    render() {
        const {error} = this.state;
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
                    {error && <p>Invaid Username or Password</p>}
                </div>
            </div>
        );
    }
}