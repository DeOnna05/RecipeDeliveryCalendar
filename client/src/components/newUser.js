import React from 'react';
import axios from 'axios';
import {Container, Col, Form, FormGroup, Input,  Button,} from 'reactstrap';

export default class NewUser extends React.Component {
    state = {
        firstname: "",
        lastname: "",
        username: "",
        password: "",
        error: ""
    }

    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }
    submitClick = (event) => {
        event.preventDefault();
        console.log(this.state);
        axios.post('/api/newUser', this.state).then(res => {
            console.log(res, "response from create user");
        });
    }

    render() {
        return (
        <Container className="signIn">            
            <h1>Sign Up</h1>
                <Form className="signInForm">
                    <Col>
                        <FormGroup>                        
                            <Input
                                className="firstname"
                                placeholder="First Name"
                                id="firstname"
                                name="firstname"
                                type="text"
                                value={this.state.firstname}
                                onChange={event=>this.handleChange(event)}
                            />
                        </FormGroup>
                    </Col>
                    <Col>
                        <FormGroup>
                        <Input
                            className="lastname"
                            placeholder="Last Name"
                            id="lastname"
                            name="lastname"
                            type="text"
                            value={this.state.lastname}
                            onChange={event=>this.handleChange(event)}
                        />
                        </FormGroup>
                    </Col>
                    <Col>
                        <FormGroup>
                        <Input
                            className="username"
                            placeholder="Email"
                            id="username"
                            name="username"
                            type="text"
                            value={this.state.username}
                            onChange={event=>this.handleChange(event)}
                        />
                        </FormGroup>
                    </Col>
                    <Col>
                        <FormGroup>   
                        <Input
                            className="password"
                            placeholder="Password"
                            name="password"
                            type="password"
                            value={this.state.password}
                            onChange={event=>this.handleChange(event)}
                        />
                        </FormGroup>
                    </Col>
                    <Col>
                        <FormGroup>
                        <Input
                            className="submit"
                            value="SUBMIT"
                            type="submit"
                            onClick={event=>this.submitClick(event)}
                        />
                        </FormGroup>
                    </Col>
                    </Form> 
        </Container>
        );
    }
}