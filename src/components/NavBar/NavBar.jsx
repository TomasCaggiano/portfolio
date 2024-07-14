import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink, Link } from 'react-bootstrap';

function NavBar() {
    return (
      <>
        <Navbar bg="dark" data-bs-theme="dark">
          <Container>
            <Navbar.Brand to="/">Home</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link to="/contact">Contact</Nav.Link>
              <Nav.Link to="/Projects">Projects</Nav.Link>
              <Nav.Link to="/About">About</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        </>
        );
    }
    
    export default NavBar;