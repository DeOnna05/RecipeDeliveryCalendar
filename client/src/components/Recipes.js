import React from 'react';
import { Col } from 'reactstrap';
import './Recipes.css'


const Recipes = (props) => {
    console.log(props)
    return (
            <Col className="cardCol" s="12" m="6" lg="4">
                <div className="card-deck">
                    <div className="card large hoverable recipeCard">
                        <div className="card-header">{props.recipe.category}</div>
                        <img className="card-img-top" src={props.recipe.image}alt="Recipe Image"></img>
                        <div className="card-body">
                            <h5 className="card-title">{props.recipe.recipe_name}</h5>
                            <p className="card-text">{props.recipe.caption}</p>
                            <div className="card-footer">
                            <a href="#" className="btn btn-danger cardBtn">Delete</a>  
                            <a href="#" className="btn btn-info cardBtn">Modify</a>
                            </div>
                        </div>
                    </div>
                </div>
            </Col>
     
    )
}

export default Recipes