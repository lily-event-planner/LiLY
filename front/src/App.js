import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home/Home";
import Signin from "./components/Auth/Signin";
import Signup from "./components/Auth/Signup";
import Header from "./components/Home/Header";
import Gategory from "./components/Gategory/Gategory";
import Bride from "./components/Gategory/bride/bride";
import Groom from "./components/Gategory/groom/groom";
import Weeding from "./components/Gategory/weeding/weeding";
import Productform from "./components/Gategory/product/productForm";
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
        console.log(this.state.categories);
        console.log(this.state.categories[0].name);
      })
      .catch((e) => {
        console.log(e.response);
      });
  }
  render() { 

    if (!this.state.categories) {
    // console.log(this.state.categories , 'from if')  // 
    return <span>Loading ...</span>
    }

    return (
      <div className="App">
        <Router>
          <Header />

          <Switch>
            <Route path="/" exact component={Home} />
            <Route
              path="/gategory"
              exact
              component={() => <Gategory data={this.state.categories} />}
            />
            {/* to send data into routes  */}
            <Route path="/bride" exact component={Bride} />
            <Route path="/weeding" exact component={Weeding} />
            <Route path="/groom" exact component={Groom} />
            <Route path="/productform" exact component={Productform} />
            <Route path="/signin" exact component={Signin} />
            <Route path="/signup" exact component={Signup} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
