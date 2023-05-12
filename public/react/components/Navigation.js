import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function Navigation() {
  return (
    <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">The Spoonful Blog</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Posts</Nav.Link>
          </Nav>
      </Navbar>
  )
}

export default Navigation;
