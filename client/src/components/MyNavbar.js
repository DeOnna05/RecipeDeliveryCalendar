import React from 'react';
import {Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Button} from 'reactstrap';

export default class MyNavbar extends React.Component {
  
    state = {
      isOpen: false
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/"><img width="25%" src="/media/RecipeDeliveryLogo.png"></img></NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <Button outline color="info" size="lg" href="/components/">Sign In</Button>
              </NavItem>
              <NavItem>
                <Button color="info" size="lg" href="https://github.com/reactstrap/reactstrap">Sign Up</Button>
              </NavItem>              
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}