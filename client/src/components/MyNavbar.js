import React from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink, Button} from 'reactstrap';

const MyNavbar = (props) => {
  


    return (
      <div>
        <Navbar light expand="md">
          <NavbarBrand href="/"><img width="25%" src="/media/RecipeDeliveryLogo.png"></img></NavbarBrand>
      
            <Nav className="ml-auto" navbar>
              <NavItem>
                <Button outline color="info" size="lg" href="/Login">Sign In</Button>
              </NavItem>
              <NavItem>
                <Button color="info" size="lg" href="/newUser">Sign Up</Button>
              </NavItem>              
            </Nav>
 
        </Navbar>
      </div>
    );
  }


export default MyNavbar;