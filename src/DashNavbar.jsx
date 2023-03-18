import React from "react";
import { Container, Navbar, Nav, Button} from 'react-bootstrap'

const MainDash = () => {
  return (
  <>
    <Navbar style={{margin: 20, backgroundColor: "white"}} bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">
          <h2>Studd</h2>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/classes">Classes</Nav.Link>
          </Nav>
          <Nav>
            <Button variant="outline-secodary" style={{borderRadius: 100}}></Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </>
  );
};

export default MainDash;
