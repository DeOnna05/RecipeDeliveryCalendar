import React from 'react';
import axios from 'axios';
import './Login.css';
import { InputGroup, InputGroupAddon, InputGroupText, Input, Container, Row, Col, Card, CardImg, CardText, CardBody, CardLink, CardTitle, CardSubtitle, UncontrolledCarousel, Button, Carousel } from 'reactstrap';



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
                        {/* <Carousel.Item>
                            <img width={900} height={500} alt="900x500" src="/carousel.png" />
                            <Carousel.Caption>
                                <h3>First slide label</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>
                        </Carousel.Item> */}
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