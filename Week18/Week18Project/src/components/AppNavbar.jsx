import { Container, Navbar, Nav } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

// Simple top navigation for the three required pages.
const AppNavbar = () => (
  <Navbar expand="lg" bg="dark" variant="dark">
    <Container>
      <Navbar.Brand as={NavLink} to="/">
        Media Catalog
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="primary-nav" />
      <Navbar.Collapse id="primary-nav">
        <Nav className="ms-auto">
          <Nav.Link as={NavLink} to="/" end>
            Home
          </Nav.Link>
          <Nav.Link as={NavLink} to="/catalog">
            Catalog
          </Nav.Link>
          <Nav.Link as={NavLink} to="/about">
            About
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
)

export default AppNavbar
