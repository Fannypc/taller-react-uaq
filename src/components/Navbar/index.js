import { useSelector } from "react-redux";
import { Navbar, Container, Nav } from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";
import { doLogout } from "../../store/actions/authActions";
import { useDispatch } from "react-redux";

function NavbarApp() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state);
  const logout = () => {
    console.log("dentro de logout");
    dispatch(doLogout());
  };

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
          <Nav className="d-flex justify-content-end">
            {!user && (
              <Link to="/login" className="nav-link">
                Login
              </Link>
            )}
            {user && (
              <div className="nav-link" onClick={logout}>
                Logout
              </div>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarApp;
