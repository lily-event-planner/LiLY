import React, { useState } from "react";
import { Container, Form, Row, Col, Button } from "react-bootstrap";
import BackgroundSlider from "react-background-slider";
import {login} from '../../Actions/auth.actions'
import {useDispatch} from 'react-redux'
// import axios from "axios";

const  Signinadmin = (props) =>  {
const [email , setEmail] = useState('');
const [password , setPassword] = useState('')
const [error , setError] =  useState('')
const dispatch = useDispatch()

  const userLogin = (e) => {
   e.preventDefault ()
    const user = {
      email , password 
    } 
    dispatch(login(user));
  }
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
              <Form onSubmit = {userLogin} >
                <Form.Group controlId="formGroupEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    value = {email}
                    name="email"
                    onChange = {(e) => setEmail(e.target.value) }
                  />
                </Form.Group>
                <Form.Group controlId="formGroupEmail">
                  <Form.Label> Password </Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Enter your password "
                    value = {password}
                    name="password"
                    onChange = {(e) => setPassword(e.target.value) }
                  />
                </Form.Group>
              
                <Button
                  variant="primary"
                  type="submit"
               
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

export default Signinadmin;
