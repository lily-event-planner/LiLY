import React, { Component } from "react";
import { Card, Row, Col, Form } from "react-bootstrap";
import { NavLink } from "react-router-dom";
class Bride extends Component {
  render() {
    return (
      <div>
      <div className="d-inline-flex p-2 col-example">
      <div
      className="card card--14 "
      style={{
        backgroundImage:
          "url(https://388707-1222130-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2020/07/Demetrios-Wedding-Dresses-2020i.jpg)",
      }}
    >
      <h2 className="card__title"> dress </h2>
      <img
        className="card__img"
        src="https://388707-1222130-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2020/07/Demetrios-Wedding-Dresses-2020i.jpg"
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
          "url(https://ae01.alicdn.com/kf/Hd0455f673666444a8ea176d9337d1831A/Wedding-shoes-women-s-rough-heel-new-winter-wedding-bride-shoes-champagne-colored-high-heeled-dress.jpg)",
      }}
    >
      <h2 className="card__title"> dress </h2>
      <img
        className="card__img"
        src="https://ae01.alicdn.com/kf/Hd0455f673666444a8ea176d9337d1831A/Wedding-shoes-women-s-rough-heel-new-winter-wedding-bride-shoes-champagne-colored-high-heeled-dress.jpg"
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
          "url(https://www.thepinkbride.com/wp-content/uploads/2018/11/Accessories-for-the-Contemporary-Bride-by-Texture-Photo-on-The-Pink-Bride.jpg)",
      }}
    >
      <h2 className="card__title"> dress </h2>
      <img
        className="card__img"
        src="https://www.thepinkbride.com/wp-content/uploads/2018/11/Accessories-for-the-Contemporary-Bride-by-Texture-Photo-on-The-Pink-Bride.jpg"
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

     {/* <div className="d-inline-flex p-2 col-example"> */}
          <div
      className="card card--14 "
      style={{
        backgroundImage:
          "url(https://i.pinimg.com/originals/83/3e/d4/833ed459cd19bf6872a7f1d5e91ea52e.jpg)",
      }}
    >
      <h2 className="card__title"> dress </h2>
      <img
        className="card__img"
        src="https://i.pinimg.com/originals/83/3e/d4/833ed459cd19bf6872a7f1d5e91ea52e.jpg"
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
          "url(https://thumbs.dreamstime.com/b/spa-still-life-wooden-background-concept-beauty-body-care-90539801.jpg)",
      }}
    >
      <h2 className="card__title"> dress </h2>
      <img
        className="card__img"
        src="https://thumbs.dreamstime.com/b/spa-still-life-wooden-background-concept-beauty-body-care-90539801.jpg"
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

export default Bride;
