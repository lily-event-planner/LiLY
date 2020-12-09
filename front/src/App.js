import React, { Component } from "react";
import "./App.css";
// import logo from "./logo.png";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home/Home";
import Signin from "./components/Auth/Signin";
import Signup from "./components/Auth/Signup";
import Header from "./components/Home/Header";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          {/* <Route path="/" exact component={Home} /> */}
          <Route path="/signin" exact component={Signin} />
          <Route path="/signup" exact component={Signup} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
