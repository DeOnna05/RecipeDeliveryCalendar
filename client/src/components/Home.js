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
        this.setState({[event.target.name]: event.target.value })
    }

    submitClick = (event) => {
        event.preventDefault();
        
        axios.post('/api/login', {
            username: this.state.username,
            password: this.state.password
        }).then(res => {
            const token = res.data.token;
            localStorage.setItem('token', token);
            console.log(res, "response from login");
            window.location.href="/dashboard"
        }).catch(error => {
            console.log(error)
            this.setState({
                username: '',
                password: '',                
                error: 'Incorrect username or password'
            })
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
                            <h1 className="title">Sign In</h1>
                            <p className="highlight">{this.state.error}</p>
                            <div className="form-group">
                                <label>Email: </label>
                                <input type="text"
                                    className="form-control"
                                    name="username"
                                    placeholder="Enter Email"
                                    value={this.state.username}
                                    onChange={event => this.handleChange(event)} />
                            </div>
                            <div className="form-group">
                                <label>Password: </label>
                                <input type="password"
                                    className="form-control"
                                    name="password"
                                    placeholder="Enter Password"
                                    value={this.state.password}
                                    onChange={event => this.handleChange(event)} />
                                <small>New User?<a href="/newUser"> Sign Up!</a></small>
                            </div>
                            <Button type="submit"
                                className="submit btn-block btn-info"
                                onClick={event => this.submitClick(event)}>
                                Login
                            </Button>
                        </form>
                    </Col>
                    <Col md="4" sm="4" xs="12"></Col>
                </Row>
              
            </Container>
        )
    }
}