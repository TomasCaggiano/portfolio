import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';

function NavBar() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand to="/">Home</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link to="/contact">Contact</Nav.Link>
            <Nav.Link to="/projects">Projects</Nav.Link>
            <Nav.Link to="/about">About</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
