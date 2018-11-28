import React from 'react';
import axios from 'axios';
import './Home.css';
import { Container, Row, Col, Button } from 'reactstrap';

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
            <Container fluid={true} className="background">
                <Row>
                    <Col md="4" sm="4" xs="12"></Col>
                    <Col md="4" sm="4" xs="12">
                        <form className="formBox">
                        <img className="card-img-top" src="/media/RecipeDeliveryLogo.png" alt="Card image cap"></img>
                        <h1 className="title">Sign In</h1>                            
                            <div className="form-group">
                                <label for="email">Email: </label>
                                <input type="text"
                                    className="form-control"
                                    name="email"
                                    placeholder="Enter Email"
                                    value={this.state.username}
                                    onChange={event => this.handleChange(event)} />
                            </div>
                            <div className="form-group">
                                <label for="password">Password: </label>
                                <input type="password"
                                    className="form-control"
                                    name="password"
                                    placeholder="Enter Password"
                                    value={this.state.password}
                                    onChange={event => this.handleChange(event)} />
                                <small><a href="#">New User? Sign Up!</a></small>
                                <div>
                                </div>
                                <br></br>
                                    <Button type="submit" className="submit btn-block btn-info"
                                        onClick={event => this.submitClick(event)}>
                                        Login
                                </Button>
                               
                            </div>
                        </form>
                    </Col>
                    <Col md="4" sm="4" xs="12"></Col>
                </Row>
            </Container >






        )
    }
}