import React from 'react';
import {Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Button} from 'reactstrap';

const MyNavbar = (props) => {
  


    return (
      <div>
        <Navbar light expand="md">
          <NavbarBrand href="/"><img width="25%" src="/media/RecipeDeliveryLogo.png"></img></NavbarBrand>
      
            <Nav className="ml-auto" navbar>
              <NavItem>
                <Button outline color="info" size="lg" href="/components/">Sign In</Button>
              </NavItem>
              <NavItem>
                <Button color="info" size="lg" href="https://github.com/reactstrap/reactstrap">Sign Up</Button>
              </NavItem>              
            </Nav>
 
        </Navbar>
      </div>
    );
  }


export default MyNavbar;