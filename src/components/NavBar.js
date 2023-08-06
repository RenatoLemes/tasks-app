import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
//importing the links to the pages
import { NavLink } from "react-router-dom";
import styles from "../styles/NavBar.module.css";

const NavBar = () => {
  return (
    <Navbar expand="md" fixed="top">
      <Container>
        <Navbar.Brand href="#home">Task App</Navbar.Brand>
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