import React, { Component } from "react";
import { NavLink } from "react-bootstrap";
import BackgroundSlider from 'react-background-slider'

const Card = ({ name, price, description, productPicture }) => {
  const message = () => {
    alert("add succesfully ");
  };

  return (
    <div> 

{/* <BackgroundSlider
          images={[
            "https://images.pexels.com/photos/70737/pexels-photo-70737.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            "https://images.pexels.com/photos/3204420/pexels-photo-3204420.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
            "https://images.pexels.com/photos/3474504/pexels-photo-3474504.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          ]}
          duration={10}
          transition={2}
        /> */}
      {/* <button className="btn" onClick={message} target="_blank">
                  <div className="button relative">
                    <div className="element">
                      <p> book me  </p>
                    </div>
                  </div>
                </button> */}
    <div className="d-inline-flex p-2 col-example" >
      <div className="wrapper-grey padded">
        <div className="container">
          <div className="col-xs-12 col-sm-4">
            <div
              className="card"
              style={{
                backgroundImage:
                  "url(https://i.pinimg.com/564x/50/24/50/50245045ef94d53ac600feb823193343.jpg)",
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
                <h2> Satin dress </h2>
                <p>  Modest and organza wedding dresses </p>
                <span> 5000 Nis </span>
              </div>
            </div>
          </div>
        </div>
      </div>
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
                <h2> Crown </h2>
                <p> silver Crown with gold dimond </p>
                <span> 100 Nis </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="wrapper-grey padded">
        <div className="container">
          <div className="col-xs-12 col-sm-4">
            <div
              className="card"
              style={{
                backgroundImage:
                  "url(https://i.pinimg.com/474x/5e/95/d1/5e95d13dd015f778f251c234f8a5c807.jpg)",
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
                <h2> Natural green Suit </h2>
                <p>  very luxury Natural green Suit  </p>
                <span> 5000 Nis </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>

  );
};

export default Card;
