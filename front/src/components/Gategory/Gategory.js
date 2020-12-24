import React, { Component } from "react";
import { Card, Row, Col, Form } from "react-bootstrap";
import { BrowserRouter as Router, Route, Link, Redirect , NavLink } from "react-router-dom";
import axios from "axios";
import './category.css'
class Gategory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list : JSON.parse(localStorage.getItem("categories")),
    }
  }

  componentDidMount() {
var data = JSON.parse(localStorage.getItem("categories"))
this.setState({
          list: data
        });

}


  render() {

    return (
      <div className="d-inline-flex p-2 col-example">
        <div
          className="card card--14 "
          style={{
            backgroundImage:
              "url(https://scontent.fjrs8-1.fna.fbcdn.net/v/t1.15752-9/131929865_136818174741719_8930870527818541224_n.png?_nc_cat=107&ccb=2&_nc_sid=ae9488&_nc_ohc=L2NZaKOqPf8AX8YIQF1&_nc_ht=scontent.fjrs8-1.fna&oh=3a4482a5381ee5cff0baf416e88a79ad&oe=6004E5F6)",
          }}
        >
          <h2 className="card__title"> {this.state.list[0].name} </h2>
          <img
            className="card__img"
            src="https://scontent.fjrs8-1.fna.fbcdn.net/v/t1.15752-9/131929865_136818174741719_8930870527818541224_n.png?_nc_cat=107&ccb=2&_nc_sid=ae9488&_nc_ohc=L2NZaKOqPf8AX8YIQF1&_nc_ht=scontent.fjrs8-1.fna&oh=3a4482a5381ee5cff0baf416e88a79ad&oe=6004E5F6"
            alt=""
          />
          <p className="card__text" id>
          {this.state.list[0].description}
          </p> 
          <NavLink className="card__btn" to="/bride">
      
           show 
        
          </NavLink>
        </div>
        <div
          className="card card--14 "
          style={{
            backgroundImage:
              "url(https://www.taylorhughesphotography.com/wp-content/uploads/2019/02/Morden-Hall-Wedding-Taylor-Hughes-Photography-26.jpg)",
          }}
        >
          <h2 className="card__title"> {this.state.list[1].name} </h2>
          <img
            className="card__img"
            src="https://www.taylorhughesphotography.com/wp-content/uploads/2019/02/Morden-Hall-Wedding-Taylor-Hughes-Photography-26.jpg"
            alt=""
          />
          <p className="card__text" id>
            its your big day and we will make it the best day in your life , you
            will find every thing you want here
          </p>
          <NavLink className="card__btn" to="/groom">
         
           show
       
          </NavLink>
        </div>
        <div
          className="card card--14 "
          style={{
            backgroundImage:
              "url(https://media.istockphoto.com/photos/beautiful-wedding-arch-of-flowers-picture-id1162366752?k=6&m=1162366752&s=612x612&w=0&h=q3pg7LF15tfJuWbltqo_Jo2XnWlIyd3WmzEZApe3Ibs=",
          }}
        >
          <h2 className="card__title">  {this.state.list[2].name} </h2>
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
            show 
          </NavLink>
        </div>
      </div>
    );
  }
}

export default Gategory;
