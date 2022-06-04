import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Sidenav from "./Sidenav";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { getVideos } from "../apiClient/apiClient";


import ReactPlayer from "react-player";
import Notif from "./Notif";
function Batch() {
  const [videos, setVideos] = useState([]);
  const [playing, setPlaying] = useState(true);

  const classes = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
  useEffect(async () => {
  }, []);

  return (
    <div style={{marginTop:"5%"}}>
      <Container>
        <Row>
          <Col>
            <Sidenav />
          </Col>
          <Col xs={6}>
            <h2>Class 10 Science</h2>
            <div style={{ marginTop: "5%" }}>
              <div onContextMenu={(e) => e.preventDefault()}>
                <Col style={{ padding: "20px" }}>
                  {classes.map((c) => (
                    <Card style={{marginBottom:"2rem"}}>
                      <Card.Header as="h5"></Card.Header>
                      <Card.Body>
                      <Card.Link href={"/Videos/" + c} style={{fontStyle:"none"}}>
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

export default Batch;
