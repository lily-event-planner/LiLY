import React, { Component } from "react";
import { Jumbotron, Container, Button, Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import BackgroundSlider from "react-background-slider";
import {
  MorphIcon,
  CloseButton,
  NavButton,
  PlusButton,
} from "react-svg-buttons";
import "./Home.css";
// import Header from "./Header";
class Service extends Component {
  //   constructor(props) {
  //     super(props)
  render() {
    return (
      <div>
        {/* <Header /> */}
        <BackgroundSlider
          images={[
            "https://images.pexels.com/photos/70737/pexels-photo-70737.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            "https://images.pexels.com/photos/3204420/pexels-photo-3204420.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
            "https://images.pexels.com/photos/3474504/pexels-photo-3474504.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          ]}
          duration={10}
          transition={2}
        />
         <div className="container">
      <div className="row">
        <div className="col-lg-12 text-center">
          <h2 className="section-heading text-uppercase"> Our services </h2>
          <h5 className="section-subheading text-muted">you will  find every thing you will use it in your weeding day here </h5>
          <h5 className="section-subheading text-muted"> book the product that you want , and enjoy your journy and we will contact you  </h5>
          <h5 className="section-subheading text-muted"> to appayed every thing and make your day the best day  </h5>
        </div>
      </div>
      
    </div>
    </div>
    );
  }
}

export default Service;

