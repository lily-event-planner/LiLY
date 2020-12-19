import React, { Component } from "react";
import { Card, Row, Col, Form } from "react-bootstrap";
import { BrowserRouter as Router, Route, Link, Redirect , NavLink } from "react-router-dom";
import axios from "axios";
import './category.css'
class Gategory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
      data : this.props.data
    }
  }
 handelOnClick = async (e , i) => {
    e.preventDefault(); 
    this.setState({
      redirect: true ,
      data : this.props.data[i]
    })
  }

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     redirect: false,
  //     data : this.props.data
  //   }
  // }
  // handelOnClick = async (e , i) => {
  //   e.preventDefault(); 
  //   this.setState({
  //     redirect: true ,
  //     data : this.props.data[i]
  //   })
  // }

  // render() {

    
  //   if (this.state.redirect) {
  //     return <Redirect to={{
  //       pathname: '/subGategory',
  //       state: { data: this.state.data }
  //     }} />
  //   } else {









  render() {

    if (!this.props.data) {
      // console.log(this.state.categories , 'from if')  //
      return <span>Loading ...</span>;
    }
    if (this.state.redirect) {
      return <Redirect to={{
        pathname: '/subGategory',
        state: { data: this.state.data }
      }} />
    } else {

    return (
      <div className="d-inline-flex p-2 col-example">
        <div
          className="card card--14 "
          style={{
            backgroundImage:
              "url(https://media.istockphoto.com/photos/studio-shot-of-young-beautiful-woman-picture-id626891546?k=6&m=626891546&s=612x612&w=0&h=bQdiNJlc2ugun7V2kreS0Dlgi8AsDCDL79pH9qgHMGk=)",
          }}
        >
          <h2 className="card__title"> {this.props.data[0].name} </h2>
          <img
            className="card__img"
            src="https://media.istockphoto.com/photos/studio-shot-of-young-beautiful-woman-picture-id626891546?k=6&m=626891546&s=612x612&w=0&h=bQdiNJlc2ugun7V2kreS0Dlgi8AsDCDL79pH9qgHMGk="
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
              "url(https://www.taylorhughesphotography.com/wp-content/uploads/2019/02/Morden-Hall-Wedding-Taylor-Hughes-Photography-26.jpg)",
          }}
        >
          <h2 className="card__title">{this.props.data[1].name} </h2>
          <img
            className="card__img"
            src="https://www.taylorhughesphotography.com/wp-content/uploads/2019/02/Morden-Hall-Wedding-Taylor-Hughes-Photography-26.jpg"
            alt=""
          />
          <p className="card__text" id>
            its your big day and we will make it the best day in your life , you
            will find every thing you want here
          </p>
          <NavLink className="card__btn" to="/bride">
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
}
export default Gategory;
