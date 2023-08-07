import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import styles from "../styles/NavBar.module.css";

const NavBar = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <NavLink to="/">
          <Navbar.Brand>Task App</Navbar.Brand>
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto text-left">
            <NavLink className={styles.NavLink} to="/open">
              Open
            </NavLink>
            <NavLink className={styles.NavLink} to="/in-progress">
              In Progress
            </NavLink>
            <NavLink className={styles.NavLink} to="/done">
              Done
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      
  );
};

export default NavBar;