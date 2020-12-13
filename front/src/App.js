import React, { Component } from "react";
import "./App.css";
// import logo from "./logo.png";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home/Home";
import Signin from "./components/Auth/Signin";
import Signup from "./components/Auth/Signup";
import Header from "./components/Home/Header";
import Gategory from "./components/Gategory/Gategory";

import "fontsource-roboto";

function App() {
  return (
    <div className="App">
      <Router>
        {/* <Home /> */}
        <Header />
        {/* <Gategory /> */}
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/gategory" exact component={Gategory} />
          <Route path="/signin" exact component={Signin} />
          <Route path="/signup" exact component={Signup} />
        </Switch>
        {/* <Gategory /> */}
      </Router>
    </div>
  );
}

export default App;
