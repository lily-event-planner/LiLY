import React, { Component } from "react";
import { Card, Row, Col, Form } from "react-bootstrap";
import { NavLink } from "react-router-dom";
class Groom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list : JSON.parse(localStorage.getItem("categories"))[1].children,
    }
  }

  componentDidMount() {
var data = JSON.parse(localStorage.getItem("categories"))
// console.log(this.state.list)
this.setState({
          list: data[1].children
       
        });

} 
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
      <h2 className="card__title">{this.state.list[0].name}</h2>
      <img
        className="card__img"
        src="https://i.pinimg.com/originals/12/91/4e/12914efa2235354a8b5eaecbf4c2be5e.jpg"
        alt=""
      />
   
   <NavLink className="card__btn" to="/suit">
         
          show
        
          </NavLink>
    </div>
    
    <div
      className="card card--14 "
      style={{
        backgroundImage:
          "url(https://i0.wp.com/oosile.com/wp-content/uploads/2017/11/Navy-Blue-Suit-Brown-Shoes-Wedding.jpg?resize=640%2C925&ssl=1)",
      }}
    >
      <h2 className="card__title">  {this.state.list[2].name} </h2>
      <img
        className="card__img"
        src="https://i0.wp.com/oosile.com/wp-content/uploads/2017/11/Navy-Blue-Suit-Brown-Shoes-Wedding.jpg?resize=640%2C925&ssl=1"
        alt=""
      />
     
   <NavLink className="card__btn" to="/shoess">
         
          show
        
          </NavLink>
    </div>
    <div
      className="card card--14 "
      style={{
        backgroundImage:
          "url(https://previews.123rf.com/images/ashtray25/ashtray251704/ashtray25170400603/76585892-close-up-of-modern-groom-accessories-wedding-rings-necktie-leather-shoes-and-belt.jpg)",
      }}
    >
      <h2 className="card__title">  {this.state.list[3].name} </h2>
      <img
        className="card__img"
        src="https://previews.123rf.com/images/ashtray25/ashtray251704/ashtray25170400603/76585892-close-up-of-modern-groom-accessories-wedding-rings-necktie-leather-shoes-and-belt.jpg"
        alt=""
      />

<NavLink className="card__btn" to="/accessoriess">
         
          show
        
          </NavLink>
    </div>
    
     {/* <div className="d-inline-flex p-2 col-example"> */}
          <div
      className="card card--14 "
      style={{
        backgroundImage:
          "url(https://haircutinspiration.com/wp-content/uploads/grooming-tips.jpg)",
      }}
    >
      <h2 className="card__title">  {this.state.list[1].name}</h2>
      <img
        className="card__img"
        src="https://haircutinspiration.com/wp-content/uploads/grooming-tips.jpg"
        alt=""
      />
    <NavLink className="card__btn" to="/hairr">
         
          show
        
          </NavLink>
    </div>


     </div>
     
      </div>
    );
  }
}

export default Groom;
