import { Navbar, Container, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

function NavbarApp() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <NavLink to="/" className="navbar navbar-brand">
          PokeAPI
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink to="/crear" className="nav-link">
              Crear pokemon
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarApp;
