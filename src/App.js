import './App.css';
import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Col from 'react-bootstrap/Col';
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import NotFound from './pages/NotFound'

function App() {
  const home = HomePage();
  const contact = ContactPage();
  const notFound = NotFound();

  // routing -- replace with ReactRouter someday, maybe?
  let currentPage = home;
  switch(window.location.pathname) {
    case "/":
      currentPage = home;
      break;
    case "/home":
      currentPage = home;
      break;
    case "/contact":
      currentPage = contact;
      break;
    default:
      currentPage = notFound;
      break;
  }

  // page bones
  return (
    <>
      <link href='https://fonts.googleapis.com/css2?family=Abel' rel='stylesheet' />
      
      <div className="App d-flex flex-column">
        <Navbar variant="dark" style={{backgroundColor: "rgba(10, 10, 10, 0.7)"}}>
          <Container>
            <Navbar.Brand href="/home">jeremypople.dev</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/home">[home]</Nav.Link>
              <Nav.Link href="/projects">[projects]</Nav.Link>
              <Nav.Link href="/contact">[contact]</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        {currentPage}
      </div>
    </>
  );
}

export default App;
