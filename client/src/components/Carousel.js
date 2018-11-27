import React from 'react';
import { Container, UncontrolledCarousel, Button, Row, Col, Jumbotron } from 'reactstrap';

const items = [
    {
        src: 'http://www.desertrosemediapa.com/Theme/assets/bella-firenze/images/backgrounds/homebgimage.jpg',
        altText: 'Slide 1',
        caption: 'Save time on meal planning. Recipe Calendar plans all of your meals for the coming days and weeks.',
        header: 'Save Time'
    },
    {
        src: 'http://www.desertrosemediapa.com/Theme/assets/bella-firenze/images/backgrounds/homebgimage.jpg',
        altText: 'Slide 2',
        caption: 'Your favorite recipes are right at your fingertips so your never left feeling uninspired.',
        header: 'Save Recipes'
    },
    {
        src: 'http://www.desertrosemediapa.com/Theme/assets/bella-firenze/images/backgrounds/homebgimage.jpg',
        altText: 'Slide 3',
        caption: 'Save money by avoiding waste because you only by the groceries you need. Planning ahead also saves money spent on eating out.',
        header: 'Save Money'
    }
];
const Carousel = (prop) => {
    return(
        

            <Row>
                <Col sm="12" md={{ size: 10, offset:1 }}>
                    <UncontrolledCarousel indicators={false} items={items} />
                </Col>
            </Row>


    )
}

export default Carousel;