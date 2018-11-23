import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { UncontrolledCarousel } from 'reactstrap';

const items = [
  {
    src: 'https://www.freedombykevin.com/wp-content/uploads/2017/09/Cooking-Techniques_Hero.jpg',
    altText: 'Slide 1',
    caption: 'Save time on meal planning. Recipe Calendar plans all of your meals for the coming days and weeks.',
    header: 'Save Time'
  },
  {
    src: 'https://i0.wp.com/gymlion.com/wp-content/uploads/2015/03/Cooking.jpg',
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
           <UncontrolledCarousel items={items} />
        </Container>
    )
}

export default Home;