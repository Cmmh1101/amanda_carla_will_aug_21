import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from "reactstrap";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <Navbar className="nav" expand="md" dark>
      <div className="container p-0">
        <NavbarBrand href="/" className="logo-container">
          <h1>The Jar Game</h1>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav tag="ul" className="mr-auto" navbar>
            <NavItem tag="li">
              <NavLink to="/">Home</NavLink>
            </NavItem>
            <NavItem tag="li">
              <NavLink to="/rules">Rules</NavLink>
            </NavItem>
            <NavItem tag="li">
              <NavLink to="/gamepage">Play</NavLink>
            </NavItem>
            <NavItem tag="li">
              <NavLink to="/contactus">Contact Us</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </div>
    </Navbar>
  );
};

export default Navigation;
