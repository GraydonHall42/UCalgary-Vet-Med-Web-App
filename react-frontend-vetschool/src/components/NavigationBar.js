import React from 'react';
import {Link} from 'react-router-dom';
import Logo from '../assets/ucalgary-vet-med-logo.png';
import {Container, Row, Col, Button, Image, Navbar, Nav } from "react-bootstrap";
import "../styles/NavigationBar.css";

function NavigationBar() {
    return (
        <Navbar className="navigationbar">
            <Container fluid>
            <Navbar.Brand className="logoCol" href="/">
                <Image className="logo" src={Logo} />
            </Navbar.Brand>
            <Nav className="linkCol">
                <Nav.Link className="link" href="/">Home</Nav.Link>
                <Nav.Link className="link" href="/status">Animal Statuses</Nav.Link>
                <Nav.Link className="link" href="/booking">Animal Bookings</Nav.Link>
                <Nav.Link className="link" href="/profile">Profile</Nav.Link>
            </Nav>
            </Container>
        </Navbar>
    )
}

export default NavigationBar

/* <div className="navbar">
            <div className="logo">
                <img src={Logo} />
            </div>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/booking">Animal Booking</Link>
                <Link to="/status">Animal Status</Link>
                <Link to="/profile">Profile</Link>    
            </div>
            
</div> */