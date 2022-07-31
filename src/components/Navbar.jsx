import { useState } from 'react';
import { NavLink } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const NavigationBar = () => {
  const [show, setShow] = useState(false);
  const showDropdown = e => {
    setShow(!show);
  }
  const hideDropdown = e => {
    setShow(false);
  }

  return (
    <>
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand as={NavLink} to="/" className="navbar-brand">
          DeineLieblingsJasmin
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={NavLink} to="about" className="navbar-link">
              About
            </Nav.Link>
            <Nav.Link as={NavLink} to="hiking" className="navbar-link">
              Hiking
            </Nav.Link>
            <Nav.Link as={NavLink} to="others" className="navbar-link">
              Others
            </Nav.Link>
            <NavDropdown 
              title="User" 
              id="basic-nav-dropdown"
              className="navbar-link"
              show={show}
              onMouseEnter={showDropdown}
              onMouseLeave={hideDropdown}
            >
              <NavDropdown.Item as={NavLink} to="login" className="dropdown-item">
                Log In
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="signup" className="dropdown-item">
                Sign Up
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default NavigationBar;