import {React} from 'react'
import DashNav from '../DashNavbar'
import { Container, Row, Col, Card, Button} from 'react-bootstrap'

function MainDash() {

  return (
    <>
    <DashNav></DashNav>
    <header>
      <Container><h2 style={{paddingTop: 40, paddingBottom:20}}>Welcome Back!</h2></Container>
    </header>
    <Container>
    <Row style={{hyphens: "auto"}}>
            <Col className="col-6">
              <Card key={1} className="productlist">
                <Card.Body>
                  <Card.Title>Quiz General</Card.Title>
                  <Card.Text>Test out your general knowledge with this quiz that contains questions about stuff ranging from tech to history</Card.Text>
                  <Button href="/quiz">Play</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col className="col-6">
              <Card key={1} className="productlist">
                <Card.Body>
                  <Card.Title>Quiz Chemistry</Card.Title>
                  <Card.Text>What is hydrogen monoxide?</Card.Text>
                  <Button href="/quiz2">Play</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col className="col-6">
              <Card key={1} className="productlist">
                <Card.Body>
                  <Card.Title>Quiz History</Card.Title>
                  <Card.Text>yeah.</Card.Text>
                  <Button href="/quiz3">Play</Button>
                </Card.Body>
              </Card>
            </Col>
    </Row>
    </Container>
    </>
  )
}

export default MainDash;