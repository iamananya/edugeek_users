import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FaPlus } from "react-icons/fa";
function Chat() {
  return (
    <div>
      <Container>
        <Row>
          <Col>Chats   <FaPlus /></Col>
          <Col xs={6}>2 of 3 (wider)</Col>
         
        </Row>
        
      </Container>
    </div>
  );
}

export default Chat;
