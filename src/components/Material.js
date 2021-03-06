import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Sidenav from "./Sidenav";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { getMaterial } from "../apiClient/apiClient";
import { useParams } from 'react-router';


import ReactPlayer from "react-player";
import Notif from "./Notif";
function StudyMaterial() {
  const [material, setMaterial] = useState([]);
  const { classNumber } = useParams();
  
  useEffect(async () => {
    const res = await getMaterial();
    setMaterial(res.data);
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
                  {material.map((data) => (
                      (data.class_number == classNumber) ?
                    <Card>
                      <Card.Header as="h5">Class: {data.class_number}</Card.Header>
                      <Card.Img variant="top" src="https://images.unsplash.com/photo-1648737155328-0c0012cf2f20" />
                      <Card.Body>
                       
                      
                      <Card.Title>Title: {data.title}</Card.Title>
                      <Button href={data.material}>Link</Button> 
                        
                      </Card.Body>
                    </Card> : <></>
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
