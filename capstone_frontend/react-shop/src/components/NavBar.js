import React, { Component } from 'react';
import {Navbar, Container, Nav } from 'react-bootstrap'
import {Link} from 'react-router-dom'


export default class NavBar extends Component {
    render() {
        return (
            <Navbar bg="dark" variant="dark">
            <Container>
            <Navbar.Brand href="./Home">Home</Navbar.Brand>
            <Nav className="me-auto navbar_wrapper">
                <Link class="nav-link" to="/home">Outdoor Work</Link>
                <Link class="nav-link" to="/Room">Rooms</Link>
                
                              
            </Nav>
            </Container>
          </Navbar>
        )
    }
}