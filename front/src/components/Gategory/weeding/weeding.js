import React, { Component } from "react";
import { Card, Row, Col, Form } from "react-bootstrap";
import { NavLink } from "react-router-dom";
class Weeding extends Component {
  render() {
    return (
      <div>
      <div className="d-inline-flex p-2 col-example">
      <div
      className="card card--14 "
      style={{
        backgroundImage:
          "url(https://www.weddingforward.com/wp-content/uploads/2015/07/wedding-themes-rich-copper-style-emmaleighphoto-via-instagram-min.jpg)",
      }}
    >
      <h2 className="card__title"> dress </h2>
      <img
        className="card__img"
        src="https://www.weddingforward.com/wp-content/uploads/2015/07/wedding-themes-rich-copper-style-emmaleighphoto-via-instagram-min.jpg"
        alt=""
      />
      <p className="card__text" id>
        its your big day and we will make it the best day in your life , you
        will find every thing you want here
      </p>
      <button className="card__btn"  onClick={this.handleClick} >
       show me
      </button>
    </div>
    <div
      className="card card--14 "
      style={{
        backgroundImage:
          "url(https://www.eliteshowband.com/wp-content/uploads/2019/12/Waldorf-Astoria-Orlando2-1030x687.jpg)",
      }}
    >
      <h2 className="card__title"> dress </h2>
      <img
        className="card__img"
        src="https://www.eliteshowband.com/wp-content/uploads/2019/12/Waldorf-Astoria-Orlando2-1030x687.jpg"
        alt=""
      />
      <p className="card__text" id>
        its your big day and we will make it the best day in your life , you
        will find every thing you want here
      </p>
      <button className="card__btn"  onClick={this.handleClick} >
       show me
      </button>
    </div>
    <div
      className="card card--14 "
      style={{
        backgroundImage:
          "url(https://www.officialroyalwedding2011.org/wp-content/uploads/2019/10/wedding-photographer.jpeg)",
      }}
    >
      <h2 className="card__title"> dress </h2>
      <img
        className="card__img"
        src="https://www.officialroyalwedding2011.org/wp-content/uploads/2019/10/wedding-photographer.jpeg"
        alt=""
      />
      <p className="card__text" id>
        its your big day and we will make it the best day in your life , you
        will find every thing you want here
      </p>
      <button className="card__btn"  onClick={this.handleClick} >
       show me
      </button>
    </div>
</div>
      </div>
    );
  }
}

export default Weeding;
