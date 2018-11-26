import React from 'react';
import axios from 'axios';
import './Login.css';
import { InputGroup, InputGroupAddon, Input, Container, Card, CardBody } from 'reactstrap';



export default class Login extends React.Component {
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
        const { error } = this.state;
        return (

            <Container>
                <Card>
                    <CardBody>
                        <h1>Sign In</h1>
                        <InputGroup>
                            <InputGroupAddon addonType="prepend">@</InputGroupAddon>
                            <Input className="username"
                                placeholder="Email"
                                id="username"
                                name="username"
                                type="text"
                                value={this.state.username}
                                onChange={event => this.handleChange(event)} />
                        </InputGroup>

                        <InputGroup>
                            <Input
                                className="password"
                                placeholder="Password"
                                name="password"
                                type="password"
                                value={this.state.password}
                                onChange={event => this.handleChange(event)} />

                            <input
                                className="submit"
                                value="SUBMIT"
                                type="submit"
                                onClick={event => this.submitClick(event)}
                            />

                            {error && <p>Invaid Username or Password</p>}
                        </InputGroup>
                    </CardBody>

                </Card>
            </Container>
        );
    }
}