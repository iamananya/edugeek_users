import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Sidenav from "./Sidenav";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { getMaterial } from "../apiClient/apiClient";


import ReactPlayer from "react-player";
import Notif from "./Notif";
function StudyMaterial() {
  const [material, setMaterial] = useState([]);
  const classes = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
  
  useEffect(async () => {
    const res = await getMaterial();
    setMaterial(res.data);
    console.log(res.data);
    console.log(material);
  }, []);
  return (
    <div style={{marginTop:"5%"}}>
      <Container>
        <Row>
          <Col>
            <Sidenav />
          </Col>
          <Col xs={6}>
            <h2>List of Study Material</h2>
            <div style={{ marginTop: "5%" }}>
              <div onContextMenu={(e) => e.preventDefault()}>
                <Col style={{ padding: "20px" }}>

                {classes.map((c) => (
                    <Card>
                      <Card.Header as="h5"></Card.Header>

                      <Card.Body>
                      <Card.Link href={"/study-material/" + c} style={{fontStyle:"none"}}>
                        <Card.Title>Class {c}</Card.Title>
                      </Card.Link>
                      </Card.Body>
                    </Card>
                  ))}
                </Col>
              </div>
            </div>
          </Col>
          <Col>
          <Notif/></Col>
        </Row>
      </Container>
    </div>
  );
}

export default StudyMaterial;
