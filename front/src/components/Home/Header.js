import React, { Component } from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Home.css";
import logo from "./logo.png";
class  Header extends Component  {
  render() {
  return (
    <Navbar className="color-nav" collapseOnSelect expand="lg">
      <NavLink to="/" className="logo">
        <img className="img " src={logo} />
      </NavLink>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
        
          <NavDropdown title="Category " id="collasible-nav-dropdown">
          <li className="nav-item">
            <NavLink to="gategory" className="nav-link">
              Category
            </NavLink>
          </li>
      
          <li className="nav-item">
            <NavLink to="bride" className="nav-link">
              Bride
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="groom" className="nav-link">
           Groom
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="theme" className="nav-link">
           Theme
            </NavLink>
          </li>
            <NavDropdown.Divider />
            </NavDropdown>
            <NavDropdown title=" About " id="collasible-nav-dropdown">
          <li className="nav-item">
            <NavLink to="service" className="nav-link">
            Our Service
            </NavLink>
          </li>
      
       
       
            <NavDropdown.Divider />
            </NavDropdown>
       
          <NavDropdown title="Contact Us" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1" className="nav-link">  about us </NavDropdown.Item>
      
            <NavDropdown.Item href="#action/3.3" className="nav-link"> contact </NavDropdown.Item>
            <NavDropdown.Divider />
           
          </NavDropdown>
          <NavDropdown title="Admin " id="collasible-nav-dropdown">
          <li className="nav-item">
            <NavLink to="signin" className="nav-link">
              Signin
            </NavLink>
          </li>
      
          <li className="nav-item">
            <NavLink to="signup" className="nav-link">
              Signup
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="productform" className="nav-link">
            productform
            </NavLink>
          </li>
      
      
            
            <NavDropdown.Divider />
           
          </NavDropdown>
          

          <NavDropdown title="Join us" id="collasible-nav-dropdown">
          <li className="nav-item">
            <NavLink to="signin" className="nav-link">
              Signin
            </NavLink>
          </li>
      
          <li className="nav-item">
            <NavLink to="signup" className="nav-link">
              Signup
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="card" className="nav-link">
            Card
            </NavLink>
          </li>
            <NavDropdown.Divider />
           
          </NavDropdown>


          {/* <Nav.Link href="#deets">Signin</Nav.Link> */}
         
        
          
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
}
export default Header;