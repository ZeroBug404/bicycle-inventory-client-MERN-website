import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import logo from '../../../images/013-bicycle.png';
import './Header.css';

const Header = () => {
  return (
    <Navbar style={{backgroundColor: 'rgb(21 39 41)'}} collapseOnSelect expand="lg" variant="dark">
      <Container>
        <Navbar.Brand className="header-logo" href="#home">
          <img src={logo} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto navbar-links">
            <Nav.Link href="#features">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
          <Nav className="navbar-links">
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
