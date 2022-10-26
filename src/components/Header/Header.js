import React from "react";
import { Button, Nav, Navbar, NavbarBrand, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Header = () => {
  const { user, logOut } = useAuth();
  return (
    <div className="container">
      <Navbar collapseOnSelect expand="sm" bg="light">
        <NavbarBrand>
          <LinkContainer to="/">
            <Nav.Link>Child Health</Nav.Link>
          </LinkContainer>
        </NavbarBrand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <LinkContainer to="/">
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>

            <LinkContainer to="/appointment">
              <Nav.Link>Appointment</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/about">
              <Nav.Link>About</Nav.Link>
            </LinkContainer>
          </Nav>
          <span className="mx-2 text-dark">{user.email}</span>

          <Nav>
            {user.email ? (
              <Button variant="info" onClick={logOut}>
                Logout
              </Button>
            ) : (
              <LinkContainer to="/login">
                <Nav.Link>Login</Nav.Link>
              </LinkContainer>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
