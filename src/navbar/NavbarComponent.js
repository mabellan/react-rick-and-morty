import React, { Component } from 'react';
import { Nav, Navbar } from 'react-bootstrap'
import {Link} from "react-router-dom";
import './navbarcomponent.css';

class NavbarComponent extends Component {
    render() {
        return (
            <Navbar bg="dark" variant="dark" expand="lg">
                <Navbar.Brand>
                        <Link to="/">Rick and Morty Reactive</Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto ">
                            <Link className="_margin-right-20" to="/home">Characters</Link>
                            <Link className="_margin-right-20" to="/locations">Locations</Link>
                            <Link className="_margin-right-20" to="/episodes">Episodes</Link>

                    </Nav>
                </Navbar.Collapse>

            </Navbar>

        );
    }

}

export default NavbarComponent;
