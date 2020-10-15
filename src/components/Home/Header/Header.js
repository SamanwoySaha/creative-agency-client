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
                <Link to="/">
                    <Navbar.Brand>
                        <img className="logo" src="https://i.imgur.com/Aq9mvuW.png" alt="" />
                    </Navbar.Brand>
                </Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Link className="nav-link sec-color ml-5 px-0" to="/">
                            Home
                        </Link>
                        <Link className="nav-link sec-color ml-5 px-0" to="#portfolio">
                            Our Portfolio
                        </Link>
                        <Link className="nav-link sec-color ml-5 px-0" to="#team">
                            Our Team
                        </Link>
                        <Link className="nav-link sec-color ml-5 px-0" to="#contact">
                            Contact Us
                        </Link>
                        {
                            loggedInUser.email
                                ? <Link to="/dashboard" className="main-btn ml-5 mr-0">
                                    Dashboard
                                </Link>
                                : <Link className="main-btn ml-5 mr-0" to="/login">
                                    Login
                                </Link>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Container>
    );
};

export default Header;