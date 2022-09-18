import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

// Styles
import "./Navbar.css";

function CollapsibleExample() {
  const toggleNav = () => {
    localStorage.removeItem("token");
    navigate("/");
  };
  return (
    <Navbar expand="lg" variant="dark">
      <Container>
        <Navbar.Brand href="/Home"><em>Intranet</em></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/Home">Acceuil</Nav.Link>
            <Nav.Link href="/Liste">Liste</Nav.Link>
            <Nav.Link href="/CreateUser">Ajouter un utilisateur</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link onClick={() => toggleNav()} href="/">
              Déconnexion
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;
