import React from 'react';
import axios from 'axios';


// logout = (event) => {
//     event.preventDefault();
//     axios.get('/api/logout')
// do I need something here?
// }

const MyNavbar = (props) => {

  return (
    <div>
      <ul className="nav nav-tabs" id="myTab" role="tablist">
        <li className="nav-item">
          <a className="nav-link active" id="menuTab" data-toggle="tab" href="/Menu" role="tab">Menu</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" id="queueTab" data-toggle="tab" href="/Queue" role="tab">Queue</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" id="listTab" data-toggle="tab" href="/List" role="tab">Shopping List</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" id="logoutTab" data-toggle="tab" href="/" role="tab" onChange={event => this.logout(event)}>Logout</a>
        </li>
      </ul>


      <div className="tab-content" id="myTabContent">
        <div className="tab-pane fade show active" id="menu" role="tabpanel">TEST</div>
        <div className="tab-pane fade" id="queue" role="tabpanel">...</div>
        <div className="tab-pane fade" id="list" role="tabpanel">...</div>
        <div className="tab-pane fade" id="logout" role="tabpanel">...</div>
      </div>
    </div>
  )
}


export default MyNavbar;

{/* <div>
<Nav tabs light expand="md">
  <NavbarBrand href="/"><img className="logo" src="/media/RecipeDeliveryLogo.png" ></img></NavbarBrand> 
    <NavItem>
      <p>Welcome {props.user}</p>
    </NavItem>
    <NavItem>
        <Button outline color="info" size="lg" href="">List</Button>
      </NavItem>
    <NavItem>
        <Button outline color="info" size="lg" href="">Menu</Button>
      </NavItem>
      <NavItem>
        <Button outline color="info" size="lg" href="">Queue</Button>
      </NavItem>
      <NavItem>
        <Button color="info" size="lg" href="/" onChange={event => this.logout(event)}>Sign Out</Button>
      </NavItem>              
</Nav>
</div> */}