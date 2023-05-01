import './App.css';
import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { Outlet } from 'react-router-dom';

function App() {
  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Abel&display=swap" rel="stylesheet"></link>
      <div className="App d-flex flex-column">
        <Navbar variant="dark" style={{backgroundColor: "rgba(10, 10, 10, 0.7)"}}>
          <Container>
            <Navbar.Brand href="/">jeremypople.dev</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/">[home]</Nav.Link>
              <Nav.Link href="/projects">[projects]</Nav.Link>
              <Nav.Link href="/contact">[contact]</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        <Outlet />
      </div>
    </>
  );
}

export default App;
