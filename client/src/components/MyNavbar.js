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
    modal: false,
    updatedRecipe: []
  }

  componentDidMount(){
    this.getRecipes(this.state.activeElement);
  }

  getRecipes = (day) =>{
    axios.post(`/api/recipes/${day}`).then(res => {
      this.setState({
        recipes:res.data
      })
    })
  }

  logout = (event) => {
    event.preventDefault();
    axios.get('/api/logout').then(res => {
      localStorage.removeItem('token');
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

  
  toggle = (id) => {
    console.log(id)
  this.setState({
    modal: !this.state.modal,
    updateId: id
  });
}

updateRecipe = (event) => {
  event.preventDefault();
  const id = this.state.updateId;
  const updatedRecipe = {
    category:this.state.category,
    image: this.state.imageUrl,
    caption: this.state.caption,
    directions: this.state.directions,
    ingredients: this.state.ingredients,
    recipe_name: this.state.recipeName
  }
  console.log(id, "this is the id we want to update")
  axios.put(`/api/update/${id}`, updatedRecipe ).then(res => {
    console.log(res.data)
    console.log(res, "updated recipe")
    this.setState({
      updatedRecipe:res.data
    })
  })
}

handleInput = (event) => {
  event.preventDefault();
  console.log(event.target.value);
  console.log(event.target.name);
  this.setState({
    [event.target.name] : event.target.value
  })
  
}

deleteRecipe = (id) => {

  const _id = this.state.updateId;
  axios.put(`/api/delete/${_id}`).then(res => {
    console.log(res.data)
    console.log(res, "delete recipe")
  })
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
          <a className="navbar-brand" id="logoTab" href="/"><img className="navLogo" src="/media/RecipeDeliveryLogo.png" alt="Logo" ></img></a>
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
          console.log(recipe)
          return(
            <Recipes deleteRecipe={this.deleteRecipe} toggle={this.toggle} modal={this.state.modal} key={index} recipe={recipe}/>
          )
        })
      }
      </Row>
    </Container>

    {/* Modal */}
      <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
        <ModalHeader toggle={this.toggle}>Modify Recipe</ModalHeader>
        <ModalBody>
          <form>
            <div className="form-group">
              <select onChange={this.handleInput} name="category" id="category" className="custom-select">
              {console.log(this.state.recipes[0])}
                <option defaultValue>Choose Category</option>
                <option value="Breakfast">Breakfast</option>
                <option value="Lunch">Lunch</option>
                <option value="Dinner">Dinner</option>
              </select>
            </div>
            <div className="form-group">
              <input name="imageUrl" onChange={this.handleInput} type="text" className="form-control" id="imageUrl" placeholder="Paste Image URL"></input>
            </div>
            <div className="form-group">
              <input onChange={this.handleInput} name="recipeName" type="text" className="form-control" id="recipeName" placeholder="Recipe Name"></input>
            </div>
            <div className="form-group">
              <textarea onChange={this.handleInput} name="caption" className="form-control" id="caption" placeholder="Caption" rows="1"></textarea>
            </div>
            <div className="form-group">
              <textarea onChange={this.handleInput} name="ingredients" className="form-control" id="ingredients" placeholder="Ingredients List" rows="3"></textarea>
            </div>
            <div className="form-group">
              <textarea onChange={this.handleInput} name="directions" className="form-control" id="directions" placeholder="Directions List" rows="3"></textarea>
            </div>
          </form>
        </ModalBody>
        <ModalFooter>
          <Button color="info" onClick={(event) => this.updateRecipe(event)}>Submit</Button>{' '}
          <Button color="secondary" onClick={this.toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>    
    )
  }
}