import React, { useEffect } from "react";
import { Button, Form, Container, Col, Row, Nav, Navbar } from "react-bootstrap";
import sad from "../src/sad.svg";

function ErrorPage() {
  return (
    <>
      <Container className="text-center pt-5">
        <img src={sad} />
        <h1>Oops!</h1>
        <h4>We Can't seem to find the page you are looking for</h4>
        <h6>Error Code : 404</h6>
      </Container>
    </>
  );
}

export default ErrorPage;
