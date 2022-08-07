import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
// ON TESTING -------------------
// import ThemeSwitch from './Testing/ThemeSwitch';

const NavigationBar = () => {
  const [isHidden, setIsHidden] = useState(true);
  const showNav = () => {
    const loc = window.pageYOffset;
    loc > 20 ? setIsHidden(false) : setIsHidden(true);
  };
  useEffect(() => {
    window.addEventListener('scroll', showNav, { passive: true });
    return () => {
      window.removeEventListener('scroll', showNav);
    };
  }, []);
  let hideNav = isHidden ? 'hideNavbar' : '';

  const [show, setShow] = useState(false);
  const showDropdown = () => {
    setShow(!show);
  }
  const hideDropdown = () => {
    setShow(false);
  }

  return (
    <>
    <Navbar expand="lg" className={`navbar ${hideNav}`}>
      <Container>
        <Navbar.Brand 
          as={NavLink} to="/" 
          className="nav-brand"
        >
          DeineLieblingsJasmin
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link 
              // as={NavLink} to={'blogs/' + blog.id}
              as={NavLink} to="blog"
              className="nav-item"
            >
              Blog
            </Nav.Link>
            <NavDropdown 
              title="User" 
              id="nav-item-dropdown"
              show={show}
              onMouseEnter={showDropdown}
              onMouseLeave={hideDropdown}
            >
              <NavDropdown.Item 
                as={NavLink} to="login" 
                className="nav-dropdown"
              >
                Log In
              </NavDropdown.Item>
              <NavDropdown.Item 
                as={NavLink} to="signup" 
                className="nav-dropdown"
              >
                Sign Up
              </NavDropdown.Item>
            </NavDropdown>
            {/* <ThemeSwitch /> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default NavigationBar;