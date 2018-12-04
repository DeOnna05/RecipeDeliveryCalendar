import React from 'react';
import { Col } from 'reactstrap';
import './Recipes.css'


const Recipes = (props) => {
    return (
        <Col className="cardCol" s="12" m="6" lg="4">
            <div className="card-deck">
                <div className="card large hoverable recipeCard">
                    <div className="card-header">{props.recipe.category}</div>
                    <img className="card-img-top" src={props.recipe.image} alt="Recipe Image"></img>
                    <div className="card-body">
                        <h5 className="card-title">{props.recipe.recipe_name}</h5>
                        <p className="card-text">{props.recipe.caption}</p>
                        <h6>Ingredients</h6>
                        <ul>{props.recipe.ingredients.map((ingredient, i) => <li>{ingredient}</li>)}</ul>
                        <h6>Directions</h6>
                        <ol>{props.recipe.directions.map((directions, i) => <li>{directions}</li>)}</ol>
                        <div className="card-footer">
                            <button onClick={() => props.toggle(props.recipe._id)} className="btn btn-info cardBtn btn-block" >Replace Recipe</button>
                        </div>
                    </div>
                </div>
            </div>
        </Col>

    )
}

export default Recipes