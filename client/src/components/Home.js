import React from 'react';
import './Home.css';
import Carousel from './Carousel';
import {Container} from 'reactstrap';

const Home = () => {
    return (
        <div>
            <Container>
                <Carousel/>
            </Container>           
        </div>
    )
}

export default Home;