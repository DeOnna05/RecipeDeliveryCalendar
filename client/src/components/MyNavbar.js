import React from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, Button} from 'reactstrap';
import axios from 'axios';


// logout = (event) => {
//     event.preventDefault();
//     axios.get('/api/logout')
//do I need something here?
// }

const MyNavbar = (props) => {
  
    return (
      <div>
        <Navbar light expand="md">
          <NavbarBrand href="/"><img className="logo" src="/media/RecipeDeliveryLogo.png" ></img></NavbarBrand> 
            <Nav className="ml-auto" navbar>
            <NavItem>
              <p>Welcome {props.user}</p>
            </NavItem>
              <NavItem>
                <Button outline color="info" size="lg" href="/Login">Sign In</Button>
              </NavItem>
              <NavItem>
                <Button color="info" size="lg" href="/" onChange={event => this.logout(event)}>Sign Out</Button>
              </NavItem>              
            </Nav> 
        </Navbar>
      </div>
    )
  }


export default MyNavbar;