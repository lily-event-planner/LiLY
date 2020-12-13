import React, { Component } from "react";
import { Card, Row, Col, Form } from "react-bootstrap";
import { NavLink } from "react-router-dom";
class Gategory extends Component {
  render() {
    return (
      <div className="d-inline-flex p-2 col-example">
        <div
          className="card card--14 "
          style={{
            backgroundImage:
              "url(   https://lowergrenofen.co.uk/wp-content/uploads/enchanted_brides_photography-89.jpg)",
          }}
        >
          <h2 className="card__title">Bride Section </h2>
          <img
            className="card__img"
            src="   https://lowergrenofen.co.uk/wp-content/uploads/enchanted_brides_photography-89.jpg"
            alt=""
          />
          <p className="card__text" id>
            I think we don't use background images enough and by enough I mean
            like the next card
          </p>
        </div>
        <div
          className="card card--14 "
          style={{
            backgroundImage:
              "url(https://www.taylorhughesphotography.com/wp-content/uploads/2019/02/Morden-Hall-Wedding-Taylor-Hughes-Photography-26.jpg)",
          }}
        >
          <h2 className="card__title">Groom Section </h2>
          <img
            className="card__img"
            src="https://www.taylorhughesphotography.com/wp-content/uploads/2019/02/Morden-Hall-Wedding-Taylor-Hughes-Photography-26.jpg"
            alt=""
          />
          <p className="card__text" id>
            I think we don't use background images enough and by enough I mean
            like the next card
          </p>
          <NavLink className="card__btn" to="/signin">
            show me
          </NavLink>
        </div>
        <div
          className="card card--14 "
          style={{
            backgroundImage:
              "url(https://thecrimsonbride.com/wp-content/uploads/2020/02/Top-Wedding-Themes-58-768x1152.jpg)",
          }}
        >
          <h2 className="card__title"> Theme Party Section </h2>
          <img
            className="card__img"
            src="https://thecrimsonbride.com/wp-content/uploads/2020/02/Top-Wedding-Themes-58-768x1152.jpg"
            alt=""
          />
          <p className="card__text" id>
            I think we don't use background images enough and by enough I mean
            like the next card
          </p>
          <a className="card__btn" href="" class="">
            buy me
          </a>
        </div>
      </div>
    );
  }
}

export default Gategory;
