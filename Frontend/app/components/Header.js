import React, { useEffect, useReducer, useState, useContext } from "react";
import { Navbar, Button, Form, Nav, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import UserHeader from "./UserAccount/UserHeader";
import logo from "../src/logo.png";

function Header() {
  return (
    <>
      <Navbar collapseOnSelect expand="lg">
        <Navbar.Brand as={Link} to="/" className="d-none d-sm-block">
          <Image id="logo" src={logo} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto text-center">
            <Nav.Link as={Link} className="text-white" to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} className="text-white" to="/movies">
              Movies
            </Nav.Link>
            <Nav.Link as={Link} className="text-white" to="/calender">
              Calender
            </Nav.Link>
            <Nav.Link as={Link} className="text-white" to="/membership">
              Membership
            </Nav.Link>
            {/* <Nav.Link as={Link} className="text-white" to="/contact">
            Contact
          </Nav.Link> */}
            <Nav.Link as={Link} className="text-white" to="/about">
              About
            </Nav.Link>
            <Nav.Link as={Link} className="text-white" to="/login">
              Login
            </Nav.Link>
          </Nav>
          {/* <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-info">Search</Button>
        </Form> */}
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default Header;
