import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

class NavBar extends React.Component {
  render() {
    return (
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#">Quote Generator</Navbar.Brand>
        <Nav className="ml-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/generator">Generator</Nav.Link>
          <Nav.Link href="/add">Contribute</Nav.Link>
        </Nav>
      </Navbar>
    );
  }
}

export default NavBar;
