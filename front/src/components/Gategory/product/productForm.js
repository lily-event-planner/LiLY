import React, { Component } from "react";
import { Container, Form, Row, Col, Button } from "react-bootstrap";
import BackgroundSlider from "react-background-slider";
import axios from "axios";

class Productform extends Component {
  //   constructor(props) {
  //     super(props)
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
          <Row style={{ marginTop: "20px" }}>
            <Col md={{ span: 6, offset: 3 }}>
              <Form onSubmit={this.handelSubmit}>
                <Row>
                  <Col md={6}>
                    <Form.Group
                      // onSubmit={this.handelSubmit}
                      controlId="formGroupEmail"
                    >
                      <Form.Label> Name </Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter your product name"
                        // onChange={this.handleChangeInput}
                        // name="firstName"
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group controlId="formGroupEmail">
                      <Form.Label> Price</Form.Label>
                      <Form.Control
                        type="number"
                        placeholder="Enter your last name"
                        // onChange={this.handleChangeInput}
                        // name="lastName"
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md={6}>
                  <Form.Group controlId="formGroupEmail">
                  <Form.Label> 
                  productPictures 
                  </Form.Label>
                  <Form.Control
                    type="file"
                    placeholder="Enter your productPictures  "
                    // onChange={this.handleChangeInput}
                    // name="password"
                  />
                
                </Form.Group>
                  </Col>
                  <Col md={6}>
                  <Form.Group controlId="formGroupEmail">
                  <Form.Label> 
                  productPictures 
                  </Form.Label>
                  <Form.Control
                    type="file"
                    placeholder="Enter your productPictures  "
                    // onChange={this.handleChangeInput}
                    // name="password"
                  />
                
                </Form.Group>
                  </Col>
{/*                 
                  <Col md={6}>
                  <Form.Group controlId="formGroupEmail">
                  <Form.Label> 
                  productPictures 
                  </Form.Label>
                  <Form.Control
                    type="file"
                    placeholder="Enter your productPictures  "
                    // onChange={this.handleChangeInput}
                    // name="password"
                  />
                
                </Form.Group>
                  </Col> */}
                </Row>
                <Form.Group controlId="formGroupEmail">
                  <Form.Label> Description</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter product description"
                    // onChange={this.handleChangeInput}
                    // name="email"
                  />
                </Form.Group>
                {/* <Row>
                <Col md={6}>
                <Form.Group controlId="formGroupEmail">
                  <Form.Label> 
                  productPictures 
                  </Form.Label>
                  <Form.Control
                    type="file"
                    placeholder="Enter your productPictures  "
                    // onChange={this.handleChangeInput}
                    // name="password"
                  />
                
                </Form.Group>
                <Form.Group controlId="formGroupEmail">
                  <Form.Label> 
                  productPictures 
                  </Form.Label>
                  <Form.Control
                    type="file"
                    placeholder="Enter your productPictures  "
                    // onChange={this.handleChangeInput}
                    // name="password"
                  />
                
                </Form.Group>
                </Col>
                </Row> */}


                <Form.Group controlId="formGroupEmail">
                <Form.Label> category </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your location "
                  // onChange={this.handleChangeInput}
                  // name="location"
                />
              </Form.Group>
                <Form.Group controlId="formGroupEmail">
                <Form.Label> quantity
                </Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Enter your phoneNumber "
                  // onChange={this.handleChangeInput}
                  // name="phoneNumber"
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
        </div>
    );
  }
}

export default Productform;