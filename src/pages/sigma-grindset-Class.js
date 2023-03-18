import {React, useState, useEffect} from "react";
import DashNavbar from "../DashNavbar";
import { Container, Form, Card, Button } from 'react-bootstrap'

const MainDash = () => {
  const [announcements, setAnnouncements] = useState([]);
  const [text, setText] = useState("")
  const [name, setName] = useState("")

  const MakeNew = (e) => {
    window.localStorage.setItem('ANNOUNCEMENTS', JSON.stringify([...announcements, {text, name}]));
    setAnnouncements([...announcements, {text, name}])
  }

  useEffect(() => {
    const data = window.localStorage.getItem('ANNOUNCEMENTS');
    if ( data !== null ) setAnnouncements(JSON.parse(data));
  }, []);

  return (
  <>
  <DashNavbar/>
  <Container>
    <header>
      <h2 style={{paddingTop: 40, paddingBottom:20}}>Sigma Grindset Class</h2>
    </header>
    <Form style={{paddingBottom: 50}}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Share an announcement</Form.Label>
        <Form.Control type="text" placeholder="Enter name" onChange={(e) => setName(e.target.value)} style={{marginBottom: 10}} />
        <Form.Control type="text" placeholder="Enter announcement" onChange={(e) => setText(e.target.value)} />
      </Form.Group>
      <Button variant="primary" onClick={MakeNew}>
        Submit
      </Button>
    </Form>
    <Card style={{marginBottom: 10, padding: 10}}>
      <Card.Title>Teacher</Card.Title>
      <Card.Text>Elizabeth II was Queen of the United Kingdom and other Commonwealth realms from 6 February 1952 until her death in 2022. She was queen regnant of 32 sovereign states during her lifetime and was head of state of 15 realms at the time of her death.</Card.Text>
    </Card>
    {announcements.map(v => (
    <Card style={{marginBottom: 10, padding: 10}} key={v.text}>
      <Card.Title>{v.name}</Card.Title>
      <Card.Text>{v.text}</Card.Text>
    </Card>
    ))}
    </Container>
  </>
  );
};

export default MainDash;
