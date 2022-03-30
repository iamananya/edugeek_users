import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

const Login = () => {
  return (
    <>
      <Container>
        <h1 className="shadow-sm text-success mt-5 p-3 text-center rounded">
          Admin Login
        </h1>
        <Row className="mt-5">
          <Col
            lg={5}
            md={6}
            sm={12}
            className="p-5 m-auto shadow-sm rounded-lg"
          >
            <Form>
              <Form.Group>
                <Form.Label>Phone</Form.Label>
                <Form.Control placeholder="Phone Number" />
              </Form.Group>
              <br />
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <br />
              <Button variant="success btn-block" type="submit">
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
