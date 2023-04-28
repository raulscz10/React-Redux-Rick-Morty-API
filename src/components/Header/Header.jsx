import React from "react";
import "./Header.scss";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../assets/home-icon-light.svg";
import { NavLink } from "react-router-dom";

export default function Header() {
   return (
      <div className="Header">
         <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
            <Container>
               <Navbar.Brand href="/">
                  <img
                     src={logo}
                     width="30"
                     height="30"
                     className="d-inline-block align-top"
                     alt="React Bootstrap logo"
                  />
               </Navbar.Brand>
               <Navbar.Toggle aria-controls="responsive-navbar-nav" />
               <Navbar.Collapse id="responsive-navbar-nav">
                  <Nav className="me-auto">
                     <NavLink className="nav-link" to="/character" end>
                        Characters
                     </NavLink>
                     <NavLink className="nav-link" to="/about">
                        About
                     </NavLink>
                  </Nav>
               </Navbar.Collapse>
            </Container>
         </Navbar>
      </div>
   );
}
