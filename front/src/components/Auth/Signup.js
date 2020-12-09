import React, { Component } from "react";
import { Container, Form, Row, Col, Button } from "react-bootstrap";
import axios from "axios";

class Signup extends Component {
  constructor(props) {
    super(props);

    // this.handelchange = this.handelchange.bind(this);
    // this.LoginHandler = this.LoginHandler.bind(this);
  }
  state = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  };
  // handleChange = (event) => {
  //   this.setState({ password: event.target.value });
  // };

  LoginHandler = async (e) => {
    e.preventDefault();
    var data = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      password: this.state.password,
    };
    // consol.log(data);

    axios.post("http://localhost:5000/signup", data).then((response) => {
      console.log(response);
      //   localStorage.setItem("token", response.data.token);
      //   localStorage.setItem("isAdmin", response.data.isAdmin);
      //   if (response.data.isAdmin) {
      //     window.location.href = "/home";
      //   } else {
      //     window.location.href = "/";
      //   }
      // })
      // .catch((error) => {
      //   console.log(error);
    });
  };

  handleChange = (e) => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value,
    });
    console.log(this.state);
  };
  // // componentDidMount() {
  // //   document.documentElement.scrollTop = 0;
  // }
  render() {
    return (
      <Container>
        <Row style={{ marginTop: "50px" }}>
          <Col md={{ span: 6, offset: 3 }}>
            <Form>
              <Row>
                <Col md={6}>
                  <Form.Group
                    // onSubmit={this.handelSubmit}
                    controlId="formGroupEmail"
                  >
                    <Form.Label> First Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter your first name"
                      onChange={this.handleChange}
                      name="firstName"
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group controlId="formGroupEmail">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter your last name"
                      onChange={this.handleChange}
                      name="lastName"
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Form.Group controlId="formGroupEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  onChange={this.handleChange}
                  name="email"
                />
              </Form.Group>

              <Form.Group controlId="formGroupEmail">
                <Form.Label> Password </Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter your password "
                  onChange={this.handleChange}
                  name="password"
                />
              </Form.Group>
              <Button
                variant="primary"
                type="submit"
                onClick={this.LoginHandler}
              >
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    );
  }
}
export default Signup;
