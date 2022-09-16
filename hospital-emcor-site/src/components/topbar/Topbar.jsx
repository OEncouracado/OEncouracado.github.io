import React from "react";
import "./topbar.css";
import emcorbranco from "../../images/emcorbranco.jpg";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


function Topbar() {
    return (
        <Navbar bg="light" expand="lg" sticky="top" className="topbar">
            <Container >
                <Navbar.Brand href="/">
                    <img
                    alt=""
                    height={50}
                    src= {emcorbranco}
                    className= "d-inline-block align-top"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav" >
                    <Nav style={{fontSize: 20}} className="ms-auto">
                    <Nav.Link href="/">Início</Nav.Link>
                    <NavDropdown title="Sobre" id="basic-nav-dropdown">
                        <NavDropdown.Item href="Ohospital">O Hospital</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="Novapagina">Nova Página</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
export default Topbar