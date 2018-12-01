import React from 'react';
import { Col, Row } from 'reactstrap';
import './Recipes.css'


const Recipes = (props) => {


    return (
        <Row>
            <Col s="12" m="6" lg="4">
                <div class="card-deck">
                    <div className="card large hoverable recipeCard">
                        <div className="card-header">Breakfast</div>
                        <img className="card-img-top" src="https://greatist.com/sites/default/files/39HealthyBreakfastSwaps_Egg.jpg" alt="Recipe Image"></img>
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-danger cardBtn">Delete</a>
                            <a href="#" className="btn btn-info cardBtn">Cook</a>
                            <a href="#" className="btn btn-info cardBtn">Change</a>
                        </div>
                    </div>
                </div>
            </Col>
        </Row>
    )
}

export default Recipes