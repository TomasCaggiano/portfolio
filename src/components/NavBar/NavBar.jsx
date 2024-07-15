import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
function NavBar() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand to='/'>Home</Navbar.Brand>
          <Nav className="me-auto">
            <NavLink to='/contact'>Contact</NavLink>
            <NavLink to='/projects'>Projects</NavLink>
            <NavLink to='/about'>About</NavLink>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
