import React, { Component } from "react";
import { Container, Form, Row, Col, Button } from "react-bootstrap";
import BackgroundSlider from "react-background-slider";
import axios from "axios";

class Productform extends Component {
    constructor(props) {
      super(props)
      this.state = {
        name : "",
        price : "" ,
        description : "" ,
        productPicture : "" ,
        category :  "",
        quantity : "",

      }
      this.handelOnClick = this.handelOnClick.bind(this);
    this.handleChangeInput = this.handleChangeInput.bind(this);
  }
  handleChangeInput(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handelOnClick = async (e) => {
    e.preventDefault();
    console.log("ourCLient", this.state);
 
    axios
      .post("http://localhost:5000/api/product/create", this.state)
     
        .then((response) => {
          console.log(response)
        })
        
        .catch((e) => {
          console.log(e.response);
        });
    }

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
              <Form >
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
                      value = {this.state.name} 
                       onChange={this.handleChangeInput}
                       name="name"
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group controlId="formGroupEmail">
                      <Form.Label> price </Form.Label>
                      <Form.Control
                        type="number"
                        placeholder="Enter your product price"
                        value = {this.state.price} 
                         onChange={this.handleChangeInput}
                         name="price"
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md={6}>
                    <Form.Group controlId="formGroupEmail">
                      <Form.Label>   productPicture</Form.Label>
                      <Form.Control
                        type=""
                        placeholder="Enter your productPictures  "
                      value = {this.state.productPicture } 
                      onChange={this.handleChangeInput}
                      name="productPicture"
                      />
                    </Form.Group>
                  </Col>
            
                </Row>
                <Form.Group controlId="formGroupEmail">
                  <Form.Label> description </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter product description"
                value = {this.state.description} 
                onChange={this.handleChangeInput}
                name="description"
                  />
                </Form.Group>

                <Form.Group controlId="formGroupEmail">
                  <Form.Label>  category </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter category name "
                   value = {this.state.category} 
                   onChange={this.handleChangeInput}
                   name="category"
                  />
                </Form.Group>
                <Form.Group controlId="formGroupEmail">
                  <Form.Label> quantity </Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Enter your phoneNumber "
                    value = {this.state.quantity}
                     onChange={this.handleChangeInput}
                     name="quantity"
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
