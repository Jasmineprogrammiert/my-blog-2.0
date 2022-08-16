import { useState, useEffect, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
// TESTING
// import ThemeSwitch from './Testing/ThemeSwitch';
import { Context } from '../../context/Context';

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

  // testing
  const { user, dispatch } = useContext(Context);

  const handleLogout = () => {
    dispatch({ type: 'LOGOUT' });
  };

  return (
    <>
    <Navbar expand="lg" className={`navbar ${hideNav}`}>
      <Container>
        <Navbar.Brand 
          as={NavLink} to="/" 
          className="nav-brand"
        >
          Lieblingsjasmin
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link 
              as={NavLink} to="blog"
              className="nav-item"
            >
              Blog
            </Nav.Link>
            {user ? (
              <Nav.Link 
                as={NavLink} to="settings"
                className="nav-item"
              >
                <img
                  src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" 
                  alt="user avatar"
                  className="topImg"
                />
              </Nav.Link>
            ) : (
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
            )}
            {/* <ThemeSwitch /> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default NavigationBar;