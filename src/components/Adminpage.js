import React from "react";
import { Button } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup'
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";

import Form from "react-bootstrap/Form";
import { useState, useEffect } from "react";

import { getBatches } from "../apiClient/apiClient"

function Adminpage() {
  const [batches, setBatches] = useState([]);

  useEffect(async () => {
    const res = await getBatches();
    setBatches(res.data);
    console.log(res.data);
    console.log(batches);
  }, [])

  return (
    <div >
     
      <Row style={{paddingTop:"2rem"}}>
        <Col>
        </Col>
        <Col>
        <Form>
              <Form.Control type="text" placeholder="Search Batches" />
        </Form>
        </Col>
      <Col>
     
      </Col>
      </Row>
     <div style={{padding:"5rem"}}>
      <Row style={{padding:"40px"}}>
        {
          batches.map(batch => 
            <Col xs="4">
          <Card style={{padding:"40px"}}>
          <Card.Link href="/batch" style={{fontStyle:"none"}}>
            <Card.Img variant="top" src="https://images.unsplash.com/photo-1603290989627-5155a7f83dac" />
            <Card.Body>
              <Card.Title>{batch.course}</Card.Title>
              <Card.Text>
              {batch.batch_code}
              </Card.Text>
            </Card.Body>
            </Card.Link>
          </Card>
          </Col>
          )
        }
      </Row>
      </div>
    </div>
  );
}

export default Adminpage;
