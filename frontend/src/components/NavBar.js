import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function NavBar() {
  const handleSelect = (eventKey) => console.log(`selected ${eventKey}`);

  return (
    <Navbar expand="lg" className="bg-body-tertiary" onSelect={handleSelect}>
      <Container>
        <Navbar.Brand href="/">Crypto Daily</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        {/* <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link eventKey="1" href="/trends">
              Trends
            </Nav.Link>
            <Nav.Link eventKey="2" href="/tops">
              Tops
            </Nav.Link>
            <Nav.Link eventKey="3" href="/about">
              About
            </Nav.Link>
          </Nav>
        </Navbar.Collapse> */}
      </Container>
    </Navbar>
  );
}

export default NavBar;
