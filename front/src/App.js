import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home/Home";
import Signin from "./components/Auth/Signin";
import Signup from "./components/Auth/Signup";
import Header from "./components/Home/Header";
import Gategory from "./components/Gategory/Gategory";
import Bride from "./components/Gategory/bride/bride";
import Dress from "./components/Gategory/bride/dress";
import Accessories from "./components/Gategory/bride/exesories";
import Groom from "./components/Gategory/groom/groom";
import Suit from "./components/Gategory/groom/suit";
import Shoess from "./components/Gategory/groom/shoes";
import Accessoriess from "./components/Gategory/groom/exesories";
import Weeding from "./components/Gategory/weeding/weeding";
import Productform from "./components/Admin/product/productForm";
import Card from "./components/Admin/product/product";
import Service from './components/Home/ourservice'
import axios from "axios";


import "fontsource-roboto";

class App extends Component {
  constructor() {
    super();
    this.state = {
      categories: [],
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/api/category/getCategories")

      .then((response) => {
        this.setState({ categories: response.data.categoryList });
        console.log("this is the data from the app : ",this.state.categories);
        console.log(this.state.categories[0].name);
        localStorage.setItem( "categories" , JSON.stringify(response.data.categoryList ))
       })
    .catch((e) => {
      console.log(e.response);
    })
  }

  // componentDidMount() {
  //   axios
  //     .get("http://localhost:5000/api/category/getCategories")

  //     .then((response) => {
  //       console.log(response);
  //       this.setState({ categoriey: response.data.categoryList[0].children });
  //       console.log(this.state.categoriey);
  //       console.log(this.state.categoriey[3].name);
  //     })
  //     .catch((e) => {
  //       console.log(e.response);
  //     });
  // }
  // componentDidMount() {
  //   axios
  //     .get("http://localhost:5000/api/category/getCategories")

  //     .then((response) => {
  //       console.log(response);
  //       this.setState({
  //         categorieyone: response.data.categoryList[1].children,
  //       });
  //       console.log(this.state.categorieyone);
  //       console.log(this.state.categorieyone[0].name);
  //     })
  //     .catch((e) => {
  //       console.log(e.response);
  //     });
  // }

  render() {
    if (!this.state.categories) {
      // console.log(this.state.categories , 'from if')  //
      return <span>Loading ...</span>;
    }

    return (
      <div className="App">
        <Router>
          <Header />
          {/* <Product/> */}

          <Switch>
            <Route path="/" exact component={Home} />
            <Route
              path="/gategory"
              exact
              component={() => <Gategory data={this.state.categories} />}
            />
       
              <Route
              path="/bride"
              exact
              component={() => <Bride data={this.state.categoriey} />}
            /> 
            <Route
              path="/groom"
              exact
              component={() => <Groom data={this.state.categorieyone} />}
            /> 
            <Route path="/weeding" exact component={Weeding} />
            <Route path="/dress" exact component={Dress} />
            <Route path="/suit" exact component={Suit} />
            <Route path="/shoess" exact component={Shoess} />
            <Route path="/Accessories" exact component={Accessories} />
            <Route path="/Accessoriess" exact component={Accessoriess} />
            <Route path="/productform" exact component={Productform} />
            <Route path="/card" exact component={Card} />
            <Route path="/signin" exact component={Signin} />
            <Route path="/signup" exact component={Signup} />
            <Route path="/service" exact component={Service} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
