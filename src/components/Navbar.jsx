import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const NavigationBar = () => {
  return (
    <>
    <Navbar bg="light" expand="lg" fixed="top" className="navbar nav-link">
      <Container className="navbar-nav">
        <Navbar.Brand href="#home" className="navbar-brand">DeineLieblingsJasmin</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link class="nav-link nav-link" href="#about-me">About Me</Nav.Link>
            <Nav.Link href="#link" className="nav-link">Hiking</Nav.Link>
            <Nav.Link href="#link" className="nav-link">Others</Nav.Link>
            <Nav.Link href="#link" className="nav-link">Contact</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1" className="dropdown-item">
                Placeholder
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4" className="dropdown-item">
                Separated link
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