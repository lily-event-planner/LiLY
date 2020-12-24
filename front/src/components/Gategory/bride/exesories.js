import React, { Component } from "react";
import { Card, Row, Col, Form } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import axios from "axios";
import BackgroundSlider from "react-background-slider";
const Accessories = ({ name, price, description, productPicture }) => {
  const message = () => {
    alert("add succesfully ");
  };
  
 
      
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
                  "url(https://s7d1.scene7.com/is/image/BHLDN/60046604_070_b2?$pdpmain$)",
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
                <h2> gall </h2>
                <p> silver Crown with gold</p>
                <span> 100 Nis </span>
              </div>
            </div>
          </div>
        </div>
      </div>
  </div> 
    );
  }


export default Accessories;
