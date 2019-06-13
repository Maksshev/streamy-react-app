import React from 'react';
import {Row, Col, Navbar, NavbarBrand, Nav} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import GoogleAuth from "../GoogleAuth";

const Header = () => {



    return (
        <Row noGutters>
            <Col>
                <header>
                    <Navbar bg="dark" variant="dark">
                        <NavbarBrand>
                                <Link to="/" className="navbar-brand">
                                    Streamy
                                </Link>
                        </NavbarBrand>
                        <Nav className="ml-auto">
                            <Link to="/" className="nav-link">All Streams</Link>
                            <GoogleAuth className="nav-link"/>
                        </Nav>
                    </Navbar>
                </header>
            </Col>
        </Row>
    );
};

export default Header;
