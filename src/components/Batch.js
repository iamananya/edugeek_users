import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Sidenav from "./Sidenav";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
function Batch() {
  return (
    <div>
      <Container>
        <Row>
         <Col>
         <Sidenav/>
         </Col>
          {/* <Col style={{ marginTop: "5%" }}>
            <Row>Overview</Row>
            <Row>Announcement</Row>
            <Row>Videos</Row>
            <Row>Settings</Row>
          </Col> */}
          <Col xs={6}><h2>Class 10 Science</h2>
          <div style={{marginTop:"5%"}}>
          <Col style={{padding:"20px"}}>
            <Row>Batch Start</Row>
           
            <Row>Subject</Row>
          </Col>
          <Col>
      </Col>
      <Col>
      Calendar
      </Col>
      <Col>
      </Col>
          </div>
          </Col>
          <Col>
            <Card border="primary" style={{ width: "18rem" }}>
              <Card.Header>Header</Card.Header>
              <Card.Body>
                <Card.Title>Live Classes</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
            <br />

            <Card border="secondary" style={{ width: "18rem" }}>
              <Card.Header>Header</Card.Header>
              <Card.Body>
                <Card.Title>Zoom Classes</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
            <br />
            <Card border="secondary" style={{ width: "18rem" }}>
              <Card.Header>Header</Card.Header>
              <Card.Body>
                <Card.Title>Recent Announcement</Card.Title>
                <Card.Text>No Announcement</Card.Text>
              </Card.Body>
            </Card>
            <br />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Batch;
