import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import './Header.css';

const Header = () => {
    const { loggedInUser } = useContext(UserContext);
    return (
        <Container className="header px-0">
            <Navbar className="px-0" bg="none" expand="lg">
                <Navbar.Brand href="#home">
                    <Link to="/">
                        <img className="logo" src="https://i.imgur.com/Aq9mvuW.png" alt="" />
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link className="nav-link ml-5 px-0">
                            <Link className="sec-color" to="/">Home</Link>
                        </Nav.Link>
                        <Nav.Link className="nav-link ml-5 px-0">
                            <Link className="sec-color" to="#portfolio">Our Portfolio</Link>
                        </Nav.Link>
                        <Nav.Link className="nav-link ml-5 px-0">
                            <Link className="sec-color" to="#team">Our Team</Link>
                        </Nav.Link>
                        <Nav.Link className="nav-link ml-5 px-0">
                            <Link className="sec-color" to="#contact">Contact Us</Link>
                        </Nav.Link>
                        {
                            loggedInUser.email 
                                ? <Link to="/dashboard">
                                    <button className="main-btn ml-5 mr-0">Dashboard</button>
                                </Link>
                                : <Link to="/login">
                                    <button className="main-btn ml-5 mr-0">Login</button>
                                </Link>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Container>
    );
};

export default Header;