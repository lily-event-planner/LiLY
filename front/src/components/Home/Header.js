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
          <li className="nav-item">
            <NavLink to="gategory" className="nav-link">
              Category
            </NavLink>
          </li>
          {/* <li className="nav-item">
            <NavLink to="bride" className="nav-link">
          Bride
            </NavLink>
            <NavLink to="groom" className="nav-link">
         Groom
            </NavLink>
        
            <NavLink to="weeding" className="nav-link">
         Weeding
            </NavLink>

          </li> */}
          <Nav.Link href="#pricing"> Our Service </Nav.Link>
          <NavDropdown title="Contact Us" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1"> about us </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3"> contact </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Nav>
          {/* <Nav.Link href="#deets">Signin</Nav.Link> */}
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
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
}
export default Header;