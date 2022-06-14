import React, { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { getStudents } from "../apiClient/apiClient";
import { useNavigate } from "react-router-dom";

var phone = "";
var password = "";

const Login = () => {

  const [profile, setProfile] = useState([]);

  const navigate = useNavigate();

  useEffect(async () => {
    const res = await getStudents();
    setProfile(res.data);
  }, [])

  const handleLogin = (event) => {
    event.preventDefault();
    profile.forEach((adm, index) => {
      console.log(adm.phone)
      console.log(adm.password)
      if(adm.phone === phone && adm.password === password) {
        localStorage.setItem('edugeek-authorized', 1);
        navigate('/batches', {replace: true});
        window.location.reload();
        return;
      }
    })
    console.log('Login Unsuccessful')
  }
  return (
    <>
      <Container>
        <h1 className="shadow-sm text-dark mt-5 p-3 text-center rounded">
          Students Login
        </h1>
        <Row className="mt-5">
          <Col
            lg={5}
            md={6}
            sm={12}
            className="p-5 m-auto shadow-sm rounded-lg"
          >
            <Form onSubmit={handleLogin}>
              <Form.Group>
                <Form.Label>Phone</Form.Label>
                <Form.Control placeholder="Phone Number" onChange={(e) => {
                      phone = e.target.value;
                    }} />
              </Form.Group>
              <br />
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" onChange={(e) => {
                      password = e.target.value;
                    }} />
              </Form.Group>
              <br />
              <Button variant="dark btn-block" type="submit">
                Login
              </Button>
            </Form>
          </Col>
        </Row>
        <h6 className="mt-5 p-5 text-center text-secondary ">
          Copyright © 2022 Edugeek. All Rights Reserved.
        </h6>
      </Container>
    </>
  );
};

export default Login;
