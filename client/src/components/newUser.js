import React from 'react';
import axios from 'axios';
import { Container, Col, Row, Button, } from 'reactstrap';
import {Link} from 'react-router-dom';
import './newUser.css';

export default class NewUser extends React.Component {
    state = {
        firstname: "",
        lastname: "",
        username: "",
        password: "",
        error: "",
        emailError: "",
        signIn: ""
    }

    handleChange = (event) => {
        if([event.target.name] == "username" && event.target.checkValidity() === false ) {
           this.setState({emailError: true, [event.target.name]: event.target.value});
        }else {
            
            this.setState({[event.target.name]: event.target.value, emailError:false})
        }
    }

     submitClick = (event) => {
        event.preventDefault();
        console.log(this.state);
        if(!this.state.emailError && this.state.username !== ""){
            axios.post('/api/newUser', this.state).then(res => {
                console.log(res, "response from create user");
                console.log(res.data.status)
                if(res.data.status === "User already exists"){
                this.setState({
                    firstname: "",
                    lastname: "",
                    username: "",
                    password: "",
                    error: "User already exists. Please ",
                    signIn: "sign in."
                })
                console.log(this.state.error)
            }
            });
        }else {
            //CHANGE TO MODAL
            alert('Please enter valid email address');
        }
       //ADD SECOND MODAL HERE SAYING ACCOUNT WAS CREATED SUCCESSFULLY PLEASE LOGIN
           
            // alert("Your account was created successfully. Please sign in.");
            // window.location = "/"
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
                            {<p className="highlight">{this.state.error}<Link to="/">{this.state.signIn}</Link></p>}
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
                                type="email"
                                autoComplete="on"
                                value={this.state.username}
                                onChange={event => this.handleChange(event)}
                            />
                            { this.state.emailError ? <p className="highlight">Invalid Email</p> : ''}
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
         </Container>

        
        );
    }
}