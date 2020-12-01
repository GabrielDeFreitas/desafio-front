import React from 'react'
import { Navbar, NavDropdown, Nav } from 'react-bootstrap';

const Menu = () => (
    <Navbar className="app-menu__item" collapseOnSelect expand="lg">
        <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
            </Nav>
            <Nav>
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/destaque">Destaque</Nav.Link>
                <Nav.Link href="#Alugar">Alugar</Nav.Link>
                <Nav.Link href="#Comprar">Comprar</Nav.Link>
                <Nav.Link href="#Contato">Contato</Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>


)

export default Menu