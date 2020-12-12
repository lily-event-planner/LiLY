import React, { Component } from "react";
import { Container, Form, Row, Col, Button } from "react-bootstrap";
import axios from "axios";

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
      location: "",
      phoneNumber: "",
    };

    this.handelOnClick = this.handelOnClick.bind(this);
    this.handleChangeInput = this.handleChangeInput.bind(this);
  }
  handleChangeInput(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handelOnClick = async (e) => {
    e.preventDefault();
    console.log("ourCLient", this.state);
    axios.post("/signupClient", this.state).then((response) => {
      console.log(response);
    });
  };

  render() {
    return (
      <Container>
        <Row style={{ marginTop: "50px" }}>
          <Col md={{ span: 6, offset: 3 }}>
            <Form onSubmit={this.handelSubmit}>
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
                      onChange={this.handleChangeInput}
                      name="firstName"
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  {/* <Form.Group controlId="formGroupEmail">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter your last name"
                      onChange={this.handleChangeInput}
                      name="lastName"
                    />
                  </Form.Group> */}
                  <Form.Group controlId="formGroupEmail">
                    <Form.Label> Password </Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Enter your password "
                      onChange={this.handleChangeInput}
                      name="password"
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Form.Group controlId="formGroupEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  onChange={this.handleChangeInput}
                  name="email"
                />
              </Form.Group>
              <Form.Group controlId="formGroupEmail">
                <Form.Label> location </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your location "
                  onChange={this.handleChangeInput}
                  name="location"
                />
              </Form.Group>
              <Form.Group controlId="formGroupEmail">
                <Form.Label> phone </Form.Label>
                <Form.Control
                  type="tel"
                  placeholder="Enter your phoneNumber "
                  onChange={this.handleChangeInput}
                  name="phoneNumber"
                />
              </Form.Group>
              <Button
                variant="primary"
                type="submit"
                onClick={this.handelOnClick}
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
