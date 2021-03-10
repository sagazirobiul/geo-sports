import React from 'react';
import { Navbar, Nav, Container} from 'react-bootstrap';
import {NavLink} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFlagCheckered} from '@fortawesome/free-solid-svg-icons'
import './Header.css'

const Header = () => {
    const menuStyle = {
        color: '#00D2D3',
        borderBottom: '3px solid #00D2D3'
    }
    return (
        <Navbar bg="dark" expand="lg" className="nav-bar">
            <Container>
                <div className="brandName">
                    <NavLink active to="/"><span className='logo'><FontAwesomeIcon icon={faFlagCheckered} /></span>GEO SPORTS</NavLink>
                </div>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto navBarMenu" >
                        <NavLink activeStyle={menuStyle} exact to='/'>Home</NavLink>
                        <NavLink activeStyle={menuStyle} to='/league'>Details</NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;