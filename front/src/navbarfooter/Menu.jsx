import React, { useState } from 'react';
import  { NavLink } from 'react-router-dom';
import './Navbar.scss';
import { 
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem
    } from 'reactstrap';

const Menu = (props) => {
    const [isOpen, setIsOpen] = useState(false);

const toggle = () => setIsOpen(!isOpen);

    return (
        <div className="Navbar">
            <Navbar color="light" light expand="md">
                <NavbarBrand href="/">Road Accident France</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                <Nav className="mr-auto" navbar>
                    <NavItem>
                        <NavLink className="home" activeClassName="active" exact to="/">Home</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="dashboard" activeClassName="active" to="/dashboard">Dashboard</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="specifications" activeClassName="active" to="/technical-specifications">Technical specifications</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="other" activeClassName="active" to="/other">Other data visualisation tools</NavLink>
                    </NavItem>
                </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
}

export default Menu;