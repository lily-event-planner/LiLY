import React, { Component } from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
// import logo from "./logo.png";
class  AdminDashbored extends Component  {
  render() {
  return (
    <Navbar className="color-nav" collapseOnSelect expand="lg">
      <NavLink to="/" className="logo">
        {/* <img className="img " src={logo} /> */}
      </NavLink>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
        
        
          <li className="nav-item">
            <NavLink to="signinadmin" className="nav-link">
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
export default AdminDashbored;