import React, { Component } from "react";
import { Container, Form, Row, Col, Button } from "react-bootstrap";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

class Signin extends Component {
  constructor(props) {
    super(props);

    // this.handelchange = this.handelchange.bind(this);
    // this.LoginHandler = this.LoginHandler.bind(this);
  }

  state = {
    email: "",
    password: "",
  };
  // handleChange = (event) => {
  //   this.setState({ password: event.target.value });
  // };

  LoginHandler = async (e) => {
    e.preventDefault();
    var data = {
      email: this.state.email,
      password: this.state.password,
    };

    axios.post("http://localhost:5000/signin", data).then((response) => {
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

  handelchange = (e) => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value,
    });
    console.log(this.state);
  };
  // componentDidMount() {
  //   document.documentElement.scrollTop = 0;
  // }

  render() {
    return (
      <div>
        <Container>
          <Row style={{ marginTop: "50px" }}>
            <Col md={{ span: 6, offset: 3 }}>
              {/* <Form onSubmit={this.handelSubmit}> */}
              <Form>
                <Form.Group controlId="formGroupEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    onChange={this.handelchange}
                    name="email"
                  />
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text>
                </Form.Group>
                <Form.Group controlId="formGroupPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    onChange={this.handelchange}
                    name="password"
                  />
                </Form.Group>
                <Button
                  onClick={this.LoginHandler}
                  variant="primary"
                  type="submit"
                >
                  {" "}
                  Submit
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Signin;
