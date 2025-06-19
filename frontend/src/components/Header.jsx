import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
  return (
    <Navbar bg="light" className="py-2">
      <Container className="d-flex align-items-center">
        <Navbar.Brand href="/" className="me-4">ProdManager</Navbar.Brand>
        <Nav className="d-flex flex-row">
          <Nav.Link href="/" className="me-3">Home</Nav.Link>
          <Nav.Link href="/products" className="me-3">Products</Nav.Link>
          <Nav.Link href="/contact">Contact</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;