import React, { Component } from "react";
import { Card, Row, Col, Form } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import axios from "axios";
import BackgroundSlider from "react-background-slider";
class Hairr extends Component {
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
<div class="shell">
<div class="container">
<div class="row">
  <div class="col-md-3">
    <div class="wsk-cp-product">
      <div class="wsk-cp-img">
        <img src="https://i.weddingomania.com/2019/03/02-a-stylish-and-classic-pompadour-haircut-with-a-beard-always-works-and-looks-very-elegant.jpg" alt="Product" class="img-responsive" />
      </div>
      <div class="wsk-cp-text">
        <div class="category">
          <span> Taper cut </span>
        </div>
        {/* <div class="title-product">
          <h3>My face not my heart</h3>
        </div> */}

        <div class="card-footer">
          <div class="wcf-left"><span class="price">5000 NIS</span></div>
          <div class="wcf-right"><button href="#" class="buy-btn"><i class="zmdi zmdi-shopping-basket"></i></button></div>
        </div>
      </div>
    </div>
  </div>
  </div>
  </div>
  </div>
  </div> 
    );
  }
}

export default Hairr;
