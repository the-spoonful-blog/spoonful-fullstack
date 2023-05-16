import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import logo from "../../../logos/logo5.png"


function Navigation() {
  return (
    
    <Navbar bg="dark" variant="dark">
      <Container>
          <Navbar.Brand href="/"><img src ={logo} width="30" height="30" alt= "logo"></img></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/">Posts</Nav.Link>
            <Nav.Link href="#features">New Post</Nav.Link>
            <Nav.Link href="#features">About Us</Nav.Link>
          </Nav>
          </Container>
      </Navbar>
  )
}

export default Navigation;
