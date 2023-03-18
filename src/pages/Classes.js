import React from "react";
import DashNavbar from "../DashNavbar";
import { Container, Row, Col, Card, Button } from 'react-bootstrap'

const MainDash = () => {
  return (
  <>
  <DashNavbar/>
  
  <header>
      <Container><h2 style={{paddingTop: 40, paddingBottom:20}}>Your Classes</h2></Container>
  </header>

  <Container>
    <Row>
            <Col className="col-6">
              <Card key={1} className="productlist">
                <Card.Body>
                  <Card.Title>Sigma Grindset</Card.Title>
                  <Card.Text>Andrew Tate</Card.Text>
                  <Button href="/sigma-grindset">Go In</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col className="col-6">
              <Card key={1} className="productlist">
                <Card.Body>
                  <Card.Title>Python Basics</Card.Title>
                  <Card.Text>George Alan</Card.Text>
                  <Button href="/python-basics">Go In</Button>
                </Card.Body>
              </Card>
            </Col>
    </Row>
    </Container>
  </>
  );
};

export default MainDash;
