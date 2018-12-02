import React from 'react';
import axios from 'axios';
import Scrollspy from './Scrollspy';
import './MyNavbar.css';
import Recipes from './Recipes';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Container, Row } from 'reactstrap';

export default class MyNavbar extends React.Component{
  state = {
    recipes: [],
    activeElement: "Monday",
    modal: false
  }

  componentDidMount(){
    this.getRecipes(this.state.activeElement);
  }

  getRecipes = (day) =>{
    axios.post(`/api/recipes/${day}`).then(res => {
      console.log(res.data[0])
      console.log(res, "recipes")
      this.setState({
        recipes:res.data
      })
    })
  }

  logout = (event) => {
    event.preventDefault();
    axios.get('/api/logout').then(res => {
      localStorage.removeItem('token');
      console.log(res);
      window.location = '/';
    })
  }
  
   activeClass = (val) => {
     console.log("lol", val)
    this.setState({
        activeElement: val
    })
    this.getRecipes(val)
  }

  
  toggle = (event) => {
    event.preventDefault();
  this.setState({
    modal: !this.state.modal
  });
}

  render(){
  return (

    <div>
      <ul className="nav nav-tabs nav-fill" id="myTab" role="tablist">
        <li className="nav-item">
          <a className="nav-link active" id="menuTab" data-toggle="tab" href="/Menu" role="tab">Menu</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" id="showAllTab" data-toggle="tab" href="#" role="tab">All Recipes</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" id="logoutTab" data-toggle="tab" href="/" role="tab" onClick={(event) => this.logout(event)}>Logout</a>
        </li>
        <li className="nav-item">
          <a className="navbar-brand" id="logout" href="/"><img className="navLogo" src="/media/RecipeDeliveryLogo.png" alt="Logo" ></img></a>
        </li>
      </ul>
<br/>
      <Container>
      <Scrollspy 
          activeClass={this.activeClass} 
          activeElement={this.state.activeElement}/>
      <br/>
      <Row>
      {
        this.state.recipes.map((recipe, index) =>{
          return(
            <Recipes key={index} recipe={recipe}/>
          )
        })
      }
      </Row>
    </Container>

    {/* Modal */}
    
    <Button color="danger" onClick={this.toggle}>{this.props.buttonLabel}MODAL</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
          <ModalBody>

          <select class="custom-select">
            <option selected>Choose Category</option>
            <option value="Breakfast">Breakfast</option>
            <option value="Lunch">Lunch</option>
            <option value="Dinner">Dinner</option>
          </select>

          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>Submit</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
    </div>    
    )
  }
}