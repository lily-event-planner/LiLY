import React, { Component } from "react";
import { Jumbotron, Container, Button, Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import BackgroundSlider from "react-background-slider";
import {
  MorphIcon,
  CloseButton,
  NavButton,
  PlusButton,
} from "react-svg-buttons";
import "./Home.css";
// import Header from "./Header";
class Home extends Component {
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
        <div className=" header ">
          <h1 className="col-md-4"> lets achive your dream </h1>
          {/* <col-md-6> lets achive your dream </col-md-6> */}

          <h2 className="col-md-4"> your big day will be real ! </h2>
          <MorphIcon type="arrowRight" href="#Home" />
        </div>
      </div>
    );
  }
}

export default Home;

