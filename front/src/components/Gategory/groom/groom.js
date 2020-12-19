import React, { Component } from "react";
import { Card, Row, Col, Form } from "react-bootstrap";
import { NavLink } from "react-router-dom";
class Groom extends Component {
  render() {
    return (
      <div>
      <div className="d-inline-flex p-2 col-example">
      <div
      className="card card--14 "
      style={{
        backgroundImage:
          "url(https://i.pinimg.com/originals/12/91/4e/12914efa2235354a8b5eaecbf4c2be5e.jpg)",
      }}
    >
      <h2 className="card__title"> dress </h2>
      <img
        className="card__img"
        src="https://i.pinimg.com/originals/12/91/4e/12914efa2235354a8b5eaecbf4c2be5e.jpg"
        alt=""
      />s
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
          "url(https://i0.wp.com/oosile.com/wp-content/uploads/2017/11/Navy-Blue-Suit-Brown-Shoes-Wedding.jpg?resize=640%2C925&ssl=1)",
      }}
    >
      <h2 className="card__title"> dress </h2>
      <img
        className="card__img"
        src="https://i0.wp.com/oosile.com/wp-content/uploads/2017/11/Navy-Blue-Suit-Brown-Shoes-Wedding.jpg?resize=640%2C925&ssl=1"
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
          "url(https://previews.123rf.com/images/ashtray25/ashtray251704/ashtray25170400603/76585892-close-up-of-modern-groom-accessories-wedding-rings-necktie-leather-shoes-and-belt.jpg)",
      }}
    >
      <h2 className="card__title"> dress </h2>
      <img
        className="card__img"
        src="https://previews.123rf.com/images/ashtray25/ashtray251704/ashtray25170400603/76585892-close-up-of-modern-groom-accessories-wedding-rings-necktie-leather-shoes-and-belt.jpg"
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
          "url(https://haircutinspiration.com/wp-content/uploads/grooming-tips.jpg)",
      }}
    >
      <h2 className="card__title"> dress </h2>
      <img
        className="card__img"
        src="https://haircutinspiration.com/wp-content/uploads/grooming-tips.jpg"
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

export default Groom;
