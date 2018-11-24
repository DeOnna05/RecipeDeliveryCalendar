import React from 'react';
import { Container, Row, Col, Card, CardImg, CardText, CardBody, CardLink, CardTitle, CardSubtitle, UncontrolledCarousel, Button } from 'reactstrap';
// import logo from '../public/media/RecipeDeliveryLogo.png'
const items = [
  {
    src: 'https://www.freedombykevin.com/wp-content/uploads/2017/09/Cooking-Techniques_Hero.jpg',
    altText: 'Slide 1',
    caption: 'Save time on meal planning. Recipe Calendar plans all of your meals for the coming days and weeks.',
    header: 'Save Time'
  },
  {
    src: 'https://siaaustria.com/wp-content/uploads/2018/03/meals.jpg',
    altText: 'Slide 2',
    caption: 'Save the recipes you love so your never left feeling uninspired. Your favorite recipes are right at your fingertips.',
    header: 'Save Recipes'
  },
  {
    src: 'https://8bnztmont6-flywheel.netdna-ssl.com/wp-content/uploads/2017/10/833018_JbEB3pOw.jpg',
    altText: 'Slide 3',
    caption: 'Save money by avoiding waste because you only by the groceries you need. Planning ahead also saves money spent on eating out.',
    header: 'Save Money'
  }
];

const Home = () => {
    return(
        <Container>
            <Card>
                <CardBody>
                    <CardTitle><img width="100%" src="" alt="Logo" /></CardTitle>
                    <CardSubtitle>Card subtitle</CardSubtitle>
                    <UncontrolledCarousel items={items} />
                </CardBody>     
                <CardBody>
                
                </CardBody>
                <Button color="primary" size="lg" block>Block level button</Button>
<Button color="secondary" size="lg" block>Block level button</Button>
            </Card>     
        </Container>
    )
}

export default Home;