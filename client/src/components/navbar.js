import React from 'react';
import { Link } from 'react-router-dom';
import {Navbar,Nav} from 'react-bootstrap';
import "../css/navbar.css"

const DataNavbar =()=>{
    return(
    <Navbar bg="primary" variant="dark" className="navbar navbar-dark  navbar-expand-lg transparent" id="Navbar">
        <Navbar.Brand>Developer Chat Room</Navbar.Brand>
        <Nav className="mr-auto ">
            <Nav.Link as={Link} to="/homepage/introduction">Home</Nav.Link>
        </Nav>
        <Nav className="nav navbar-nav navbar-right">
            <Nav.Link as={Link} to="/homepage/login" className="nav-link">Login</Nav.Link>
            <Nav.Link as={Link} to="/homepage/register" className="nav-link">Register</Nav.Link>
        </Nav>
    </Navbar>
    );
}
export default DataNavbar;