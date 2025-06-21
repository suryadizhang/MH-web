import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import hibachiLogo from '../assets/My Hibachi logo.png'; // Adjust path if needed

const CustomNavbar = () => (
  <Navbar expand="lg" sticky="top" bg="dark" variant="dark">
    <Container>
      <Navbar.Brand as={Link} to="/">
        <img
          src={hibachiLogo}
          alt="My Hibachi Logo"
          width="200"
          height="80"
          loading="eager" // Don't lazy-load logos or header images
          style={{
            objectFit: 'contain',
            display: 'block'
          }}
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto text-center">
          <Nav.Link as={Link} to="/" style={{ color: "#FFD700", fontWeight: "bold", textShadow: "0 0 2px #000" }}>About</Nav.Link>
          <Nav.Link as={Link} to="/services" style={{ color: "#FFD700", fontWeight: "bold", textShadow: "0 0 2px #000" }}>Book Now</Nav.Link>
          <Nav.Link as={Link} to="/menu" style={{ color: "#FFD700", fontWeight: "bold", textShadow: "0 0 2px #000" }}>Menu</Nav.Link>
          <Nav.Link as={Link} to="/reviews" style={{ color: "#FFD700", fontWeight: "bold", textShadow: "0 0 2px #000" }}>Reviews</Nav.Link>
          <Nav.Link as={Link} to="/faqs" style={{ color: "#FFD700", fontWeight: "bold", textShadow: "0 0 2px #000" }}>FAQs</Nav.Link>
          <Nav.Link as={Link} to="/contact" style={{ color: "#FFD700", fontWeight: "bold", textShadow: "0 0 2px #000" }}>Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default CustomNavbar;
