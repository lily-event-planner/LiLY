import React, { Component } from "react";
import { Card, Row, Col, Form } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import axios from "axios";
import BackgroundSlider from "react-background-slider";
class Accessoriess extends Component {
  
  render() {
    return (
      <div>
      <BackgroundSlider
      images={[
        "https://images.pexels.com/photos/70737/pexels-photo-70737.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        "https://images.pexels.com/photos/3204420/pexels-photo-3204420.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        "https://images.pexels.com/photos/3474504/pexels-photo-3474504.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      ]}
      duration={10}
      transition={2}
    />

  </div> 
    );
  }
}

export default Accessoriess;
