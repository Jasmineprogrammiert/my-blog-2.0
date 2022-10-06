import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
// hooks
import useYScroll from '../../hooks/useYScroll';
// styles
import Container from 'react-bootstrap/Container';
import { Nav, Navbar } from 'react-bootstrap';
// testing
import { AuthContext } from '../../context/AuthContext';

const NavigationBar = () => {
  const { hideBar } = useYScroll();

  // testing
  const { user, dispatch } = useContext(AuthContext);
  // const PF = 'http://localhost:8000/images/'
  
  const handleLogout = () => {
    dispatch({ type: 'LOGOUT' });
  };

  return (
    <>
    <Navbar expand="lg" className={`navbar ${hideBar}`}>
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
            {/* ---------- Under Development ---------- */}
            {user ? (
              <>
              <Nav.Link 
                as={NavLink} to="settings"
                className="nav-item"
              >
                {/* <img className="topImg" src={PF+user.profilePic} alt="" /> */}
                Welcome, {user.username}
              </Nav.Link>
              <Nav.Link 
                as={NavLink} to="blog"
                className="nav-item"
              >
                Blog
              </Nav.Link>
              <Nav.Link 
                as={NavLink} to="blog"
                className="nav-item"
                onClick={handleLogout}
              >
                Log out
              </Nav.Link>
              </>
            ) : (
              <>
              <Nav.Link 
                as={NavLink} to="blog"
                className="nav-item"
              >
                Blog
              </Nav.Link>
              <Nav.Link 
                as={NavLink} to="login"
                className="nav-item"
                >
                Login
              </Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default NavigationBar;