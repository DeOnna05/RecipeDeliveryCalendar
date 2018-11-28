import React from 'react';
import axios from 'axios';
import { Container, Col, Row, Button, } from 'reactstrap';

export default class NewUser extends React.Component {
    state = {
        firstname: "",
        lastname: "",
        username: "",
        password: "",
        error: ""
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
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
            <Container fluid={true} className="background">
                <Row>
                    <Col md="4" sm="4" xs="12"></Col>
                    <Col md="4" sm="4" xs="12">
                        <form className="formBox">
                            <img className="logo" src="/media/RecipeDeliveryLogo.png" alt="RecipeDeliveryLogo"></img>
                            <h1 className="title">Sign Up</h1>
                            <br></br>
                            <div className="form-group">       
                                <input
                                    className="firstname form-control"
                                    placeholder="First Name"
                                    name="firstname"
                                    type="text"
                                    value={this.state.firstname}
                                    onChange={event => this.handleChange(event)}
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    className="lastname form-control"
                                    placeholder="Last Name"
                                    id="lastname"
                                    name="lastname"
                                    type="text"
                                    value={this.state.lastname}
                                    onChange={event => this.handleChange(event)}
                                />
                            </div>
                            <div className="form-group">
                            <input
                                className="username form-control"
                                placeholder="Email"
                                id="username"
                                name="username"
                                type="text"
                                value={this.state.username}
                                onChange={event => this.handleChange(event)}
                            />
                            </div>
                            <div className="form-group">
                            <input
                                className="password form-control"
                                placeholder="Password"
                                name="password"
                                type="password"
                                value={this.state.password}
                                onChange={event => this.handleChange(event)}
                            />
                            <small>Already have an account?<a href="/"> Sign In</a></small> 
                            </div>
                            <Button
                                className="submit btn-block btn-info"
                                type="submit"
                                onClick={event => this.submitClick(event)}>
                                Submit
                        </Button>                       
                    </form>
                </Col>
                <Col md="4" sm="4" xs="12"></Col>
            </Row>
        </Container >
        );
    }
}