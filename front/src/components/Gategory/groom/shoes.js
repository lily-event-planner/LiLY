import React, { Component } from "react";
import { Card, Row, Col, Form } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import BackgroundSlider from "react-background-slider";
import axios from "axios";
const Shoess = ({ name, price, description, productPicture }) => {
  const message = () => {
    alert("add succesfully ");
  };
  // render() {
    // this.state = {
    //   name : "" ,
    //   price : ""
    // }
      
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
 <div className="wrapper-grey padded">
        <div className="container">
          <div className="col-xs-12 col-sm-4">
            <div
              className="card"
              style={{
                backgroundImage:
                  "url(https://i.pinimg.com/564x/59/5c/16/595c16b43d971eb0c781f06220bf1ae8.jpg)",
              }}
            >
              {/* <div className="card-category">City</div> */}
              <div className="flex justify-center items-center vh-100">
                <button className="btn" onClick={message} target="_blank">
                  <div className="button relative">
                    <div className="element">
                      <p> book me  </p>
                    </div>
                  </div>
                </button>
              </div>
              <div className="card-description">
                <h2> black shoes </h2>
                <p> Shiny leather shoes </p>
                <span> 300 Nis </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    );
  
}

export default Shoess;
