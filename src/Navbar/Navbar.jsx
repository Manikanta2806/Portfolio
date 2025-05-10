import { Navbar as BootstrapNavbar, Container, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css'; // Your custom styles if any

function Navbar() {
  return (
    <BootstrapNavbar
      style={{
        backgroundColor: 'rgba(0, 0, 0, 0.6)', // Semi-transparent background
        backdropFilter: 'blur(10px)',          // Glassmorphism effect
      }}
      variant="dark"
      expand="lg"
      sticky="top"
      className="shadow-sm py-3"
    >
      <Container>
        <BootstrapNavbar.Brand href="#" className="fw-bold fs-4">
        🎯 Manikanta.codes
        </BootstrapNavbar.Brand>
        <BootstrapNavbar.Toggle aria-controls="navbar-nav" />
        <BootstrapNavbar.Collapse id="navbar-nav">
          <Nav className="ms-auto gap-3 text-uppercase">
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#skills">Skills</Nav.Link>
            <Nav.Link href="#internships">Internships</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#certifications">Certifications</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  );
}

export default Navbar;
