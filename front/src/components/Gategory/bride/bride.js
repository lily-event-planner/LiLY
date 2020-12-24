import React, { Component } from "react";
import { Card, Row, Col, Form } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import axios from "axios";
class Bride extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list : JSON.parse(localStorage.getItem("categories"))[0].children,
    }
  }

  componentDidMount() {
var data = JSON.parse(localStorage.getItem("categories"))
// console.log(this.state.list)
this.setState({
          list: data[0].children
       
        });

} 

  render() {
    return (
    
      <div className="d-inline-flex p-2 col-example">
      <div
      className="card card--14 "
      style={{
        backgroundImage:
          "url(https://388707-1222130-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2020/07/Demetrios-Wedding-Dresses-2020i.jpg)",
      }}
    >
      <h2 className="card__title"> {this.state.list[0].name}</h2>
      <img
        className="card__img"
        src="https://388707-1222130-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2020/07/Demetrios-Wedding-Dresses-2020i.jpg"
        alt=""
      />
    
    <NavLink className="card__btn" to="/dress">
         
           show 
        
          </NavLink>
    </div>
    <div
      className="card card--14 "
      style={{
        backgroundImage:
          "url(https://ae01.alicdn.com/kf/Hd0455f673666444a8ea176d9337d1831A/Wedding-shoes-women-s-rough-heel-new-winter-wedding-bride-shoes-champagne-colored-high-heeled-dress.jpg)",
      }}
    >
      <h2 className="card__title"> {this.state.list[3].name}</h2>
      <img
        className="card__img"
        src="https://ae01.alicdn.com/kf/Hd0455f673666444a8ea176d9337d1831A/Wedding-shoes-women-s-rough-heel-new-winter-wedding-bride-shoes-champagne-colored-high-heeled-dress.jpg"
        alt=""
      />
   
      <NavLink className="card__btn" to="/shoes">
         
           show 
        
          </NavLink>
    </div>
    <div
      className="card card--14 "
      style={{
        backgroundImage:
          "url(https://www.thepinkbride.com/wp-content/uploads/2018/11/Accessories-for-the-Contemporary-Bride-by-Texture-Photo-on-The-Pink-Bride.jpg)",
      }}
    >
      <h2 className="card__title"> {this.state.list[2].name}</h2>
      <img
        className="card__img"
        src="https://www.thepinkbride.com/wp-content/uploads/2018/11/Accessories-for-the-Contemporary-Bride-by-Texture-Photo-on-The-Pink-Bride.jpg"
        alt=""
      />
    
    {/* <NavLink className="card__btn" to="/accessories">
          click me 
          </NavLink> */}
            <NavLink className="card__btn" to="/accessories">
      
      show

   
     </NavLink>
    </div>

     {/* <div className="d-inline-flex p-2 col-example"> */}
          <div
      className="card card--14 "
      style={{
        backgroundImage:
          "url(https://i.pinimg.com/originals/83/3e/d4/833ed459cd19bf6872a7f1d5e91ea52e.jpg)",
      }}
    >
      <h2 className="card__title"> {this.state.list[1].name}</h2>
      <img
        className="card__img"
        src="https://i.pinimg.com/originals/83/3e/d4/833ed459cd19bf6872a7f1d5e91ea52e.jpg"
        alt=""
      />
     
     <NavLink className="card__btn" to="/hair">
         
           show 
        
          </NavLink>
    </div>
  

     </div>
     
   
     
  
    );
  }
}

export default Bride;
