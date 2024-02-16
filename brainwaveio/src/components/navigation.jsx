import React from 'react';
import {Navbar, Nav, Container} from 'react-bootstrap';

function Navigation(){
    return (
        <Navbar expand="lg">
          <Container>
            <Navbar.Brand style={{fontWeight: 'bold'}}href="#">
                Brainwave.io
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <Nav.Link href="#">Demos</Nav.Link>
                <Nav.Link href="#">Pages</Nav.Link>
                <Nav.Link href="#">Support</Nav.Link>
                <Nav.Link href="#">Contact</Nav.Link>
                <Nav.Link href="#">Sign In</Nav.Link>
                <Nav.Link href="#">Sign Up</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
    );
}

export default Navigation;