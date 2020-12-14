import React, { Component } from "react";
import { Card, Row, Col, Form } from "react-bootstrap";
import { NavLink } from "react-router-dom";
class Gategory extends Component {
  render() {
    return (
      // https://lowergrenofen.co.uk/wp-content/uploads/enchanted_brides_photography-89.jpg
      // https://thecrimsonbride.com/wp-content/uploads/2020/02/Top-Wedding-Themes-58-768x1152.jpg
      <div className="d-inline-flex p-2 col-example">
        <div
          className="card card--14 "
          style={{
            backgroundImage:
              "url(https://media.istockphoto.com/photos/studio-shot-of-young-beautiful-woman-picture-id626891546?k=6&m=626891546&s=612x612&w=0&h=bQdiNJlc2ugun7V2kreS0Dlgi8AsDCDL79pH9qgHMGk=)",
          }}
        >
          <h2 className="card__title">Bride Section </h2>
          <img
            className="card__img"
            src="https://media.istockphoto.com/photos/studio-shot-of-young-beautiful-woman-picture-id626891546?k=6&m=626891546&s=612x612&w=0&h=bQdiNJlc2ugun7V2kreS0Dlgi8AsDCDL79pH9qgHMGk="
            alt=""
          />
          <p className="card__text" id>
            its your big day and we will make it the best day in your life , you
            will find every thing you want here
          </p>
          <NavLink className="card__btn" to="/signin">
            show me
          </NavLink>
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
            its your big day and we will make it the best day in your life , you
            will find every thing you want here
          </p>
          <NavLink className="card__btn" to="/supgategory">
            show me
          </NavLink>
        </div>
        <div
          className="card card--14 "
          style={{
            backgroundImage:
              "url(https://media.istockphoto.com/photos/beautiful-wedding-arch-of-flowers-picture-id1162366752?k=6&m=1162366752&s=612x612&w=0&h=q3pg7LF15tfJuWbltqo_Jo2XnWlIyd3WmzEZApe3Ibs=",
          }}
        >
          <h2 className="card__title"> Party Section </h2>
          <img
            className="card__img"
            src="https://media.istockphoto.com/photos/beautiful-wedding-arch-of-flowers-picture-id1162366752?k=6&m=1162366752&s=612x612&w=0&h=q3pg7LF15tfJuWbltqo_Jo2XnWlIyd3WmzEZApe3Ibs="
            alt=""
          />
          <p className="card__text" id>
            let us start the magic and make un forgetabel memories ever , here
            you will find all the magic
          </p>
          <NavLink className="card__btn" to="/supgategory">
            show me
          </NavLink>
        </div>
      </div>
    );
  }
}

export default Gategory;
