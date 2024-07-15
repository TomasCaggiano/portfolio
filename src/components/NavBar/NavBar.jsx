import React from 'react';
import { NavLink } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';

function NavBar() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={NavLink} to="/">Home</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/contact">Contact</Nav.Link>
            <Nav.Link as={NavLink} to="/projects">Projects</Nav.Link>
            <Nav.Link as={NavLink} to="/about">About</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
