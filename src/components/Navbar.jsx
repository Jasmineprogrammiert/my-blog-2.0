import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const NavigationBar = () => {
  return (
    <>
    <Navbar bg="light" expand="lg" fixed="top">
      <Container>
        <Navbar.Brand href="#home">DeineLieblingsJasmin</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    {/* <Navbar bg="dark" expand="lg" fixed="top">
      <Container>
        <Navbar.Brand href="#home" id="nav-upperleft">Anything is possible with action, consistency and perseverance.</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" aria-current="page" className="nav-link">Home</Nav.Link>
            <Nav.Link href="#about-me" className="nav-link">About me</Nav.Link>
            <Nav.Link href="https://deinelieblingsjasmin.com" target="_blank" className="nav-link">My blogs</Nav.Link>
            <NavDropdown title="🇺🇸" id="basic-nav-dropdown" menuVariant="dark">
              <NavDropdown.Item href="/de.html" className="dropdown-item">🇩🇪 Deutsch</NavDropdown.Item>
              <NavDropdown.Item href="/fr.html" className="dropdown-item">🇫🇷 Français</NavDropdown.Item>
              <NavDropdown.Item href="/sc.html" className="dropdown-item">🇨🇳 简体中文</NavDropdown.Item>
              <NavDropdown.Item href="/tc.html" className="dropdown-item">🇭🇰 繁體中文</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar> */}
    </>
  )
}

export default NavigationBar;