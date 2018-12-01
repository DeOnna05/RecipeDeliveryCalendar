import React from 'react';
import axios from 'axios';
import Scrollspy from './Scrollspy'
import './MyNavbar.css'
import Recipes from './Recipes'
import { Container,Row } from 'reactstrap'

export default class MyNavbar extends React.Component{
  state = {
    recipes: [],
    activeElement: "Monday"
  }

  componentDidMount(){
    this.getRecipes(this.state.activeElement);
  }
  getRecipes = (day) =>{
    axios.post(`/api/recipes/${day}`).then(res => {
      console.log(res.data[0])
      console.log(res)
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

  render(){
  return (

    <div>
      <ul className="nav nav-tabs nav-fill" id="myTab" role="tablist">
        <li className="nav-item">
          <a className="nav-link active" id="menuTab" data-toggle="tab" href="/Menu" role="tab">Menu</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" id="queueTab" data-toggle="tab" href="/Queue" role="tab">Queue</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" id="listTab" data-toggle="tab" href="/List" role="tab">Shopping List</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" id="logoutTab" data-toggle="tab" href="/" role="tab" onClick={(event) => this.logout(event)}>Logout</a>
        </li>
        <li className="nav-item">
          <a className="navbar-brand" id="logout" href="/"><img className="navLogo" src="/media/RecipeDeliveryLogo.png" alt="Logo" ></img></a>
        </li>
      </ul>

      {/* test area for tabs */}
      <div className="tab-content" id="myTabContent">
        <div className="tab-pane fade show active" id="menu" role="tabpanel">TEST</div>
        <div className="tab-pane fade" id="queue" role="tabpanel">...</div>
        <div className="tab-pane fade" id="list" role="tabpanel">...</div>
        <div className="tab-pane fade" id="logout" role="tabpanel">...</div>
      </div>

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
    </div>

    
    )
  }
}