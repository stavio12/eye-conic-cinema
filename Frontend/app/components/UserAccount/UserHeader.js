import React, { useEffect, useReducer, useState, useContext } from "react";
import { Navbar, Button, Form, Nav, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../src/logo.png";
import avi2 from "../../src/avartar/102418.jpg";

import DispatchContext from "../DispatchContext";
import StateContext from "../StateContext";

function UserHeader() {
  const appState = useContext(StateContext); // For accessing  Login function

  return (
    <>
      <Navbar collapseOnSelect expand="lg">
        <Navbar.Brand as={Link} to="/" className="d-none d-sm-block">
          <Image id="logo" src={logo} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto text-center">
            <Nav.Link className="text-white" as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link className="text-white" as={Link} to="/movies">
              Movies
            </Nav.Link>
            <Nav.Link className="text-white" as={Link} to="/calender">
              Calender
            </Nav.Link>
            <Nav.Link className="text-white" as={Link} to="/membership">
              Membership
            </Nav.Link>
            {/* <Nav.Link className="text-white" as={Link} to="/contact">
            Contact
          </Nav.Link> */}
            <Nav.Link className="text-white" as={Link} to="/about">
              About
            </Nav.Link>
            <Nav.Link className="text-white" as={Link} to={`/${appState.user._id}/dashboard/`}>
              <img src={avi2} className="rounded-circle" id="profile-avartar" />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default UserHeader;
