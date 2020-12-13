import React, { Component } from "react";
import { Container, Form, Row, Col, Button } from "react-bootstrap";
import BackgroundSlider from "react-background-slider";
import axios from "axios";

class Signin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
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
    var newUser = {
      firstName: "jkjk",
      lastName: "kkkk",
      email: "huuu@ghgj.com",
      password: "hhhhhhhhhh",
    };
    //   axios({
    //     method: "post",
    //     url: "http://localhost:5000/auth/signup",

    //     headers: {
    //       "Content-Type": "application/json",
    //       // " Access-Control-Allow-Origin": "http://localhost:3000/",
    //     },
    //     data: {
    //       firstName: "mays",
    //       lastName: "mays",
    //       email: "hibatamimif24@gmail.com",
    //       password: "1141688",
    //     },
    //   })
    //     .then((res) => {
    //       if (res.status === 200) {
    //         console.log("success ");
    //       } else {
    //         console.log("error");
    //       }
    //     })
    //     .catch((e) => {
    //       console.log(e);
    //     });
    // };
    axios
      .post("http://localhost:5000/auth/signin", {
        email: this.state.email,
        password: this.state.password,
      })

      .then((response) => {
        console.log(response);
      })
      .catch((e) => {
        console.log(e.response);
      });
  };

  render() {
    return (
      <div>
        <BackgroundSlider
          images={[
            "https://images.pexels.com/photos/70737/pexels-photo-70737.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            "https://images.pexels.com/photos/3204420/pexels-photo-3204420.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
            "https://images.pexels.com/photos/3474504/pexels-photo-3474504.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          ]}
          duration={10}
          transition={2}
        />
        <Container>
          <Row style={{ marginTop: "50px" }}>
            <Col md={{ span: 6, offset: 3 }}>
              <Form onSubmit={this.handelSubmit}>
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
                  <Form.Label> Password </Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Enter your password "
                    onChange={this.handleChangeInput}
                    name="password"
                  />
                </Form.Group>
                {/* <Form.Group controlId="formGroupEmail">
                <Form.Label> location </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your location "
                  onChange={this.handleChangeInput}
                  name="location"
                />
              </Form.Group> */}
                {/* <Form.Group controlId="formGroupEmail">
                <Form.Label> phone </Form.Label>
                <Form.Control
                  type="tel"
                  placeholder="Enter your phoneNumber "
                  onChange={this.handleChangeInput}
                  name="phoneNumber"
                />
              </Form.Group> */}
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
      </div>
    );
  }
}
export default Signin;
