import { useState, useEffect, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
// TESTING
// import ThemeSwitch from './Testing/ThemeSwitch';
import { Context } from '../../context/Context';

const NavigationBar = () => {
  const [isHidden, setIsHidden] = useState(true);
  const [show, setShow] = useState(false);
  // testing
  const { user, dispatch } = useContext(Context);
  const PF = "http://localhost:8000/images/"

  const showNav = () => {
    const loc = window.pageYOffset;
    loc > 20 ? setIsHidden(false) : setIsHidden(true);
  };
  const showDropdown = () => {
    setShow(!show);
  }
  const hideDropdown = () => {
    setShow(false);
  }
  // testing
  const handleLogout = () => {
    dispatch({ type: 'LOGOUT' });
  };

  useEffect(() => {
    window.addEventListener('scroll', showNav, { passive: true });
    return () => {
      window.removeEventListener('scroll', showNav);
    };
  }, []);
  let hideNav = isHidden ? 'hideNavbar' : '';

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
              <>
              <Nav.Link 
                as={NavLink} to="settings"
                className="nav-item"
              >
                <img className="topImg" src={PF+user.profilePic} alt="" />
              </Nav.Link>
              <Nav.Link 
                as={NavLink} to="blog"
                className="nav-item"
                onClick={handleLogout}
              >
                Log Out
              </Nav.Link>
              </>
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