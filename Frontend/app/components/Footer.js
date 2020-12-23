import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  return (
    <div id="footer" className="bg-dark text-white text-center">
      <Row className="pt-5">
        <Col xs={12} md={6} lg={3} className="pb-5">
          <h2>
            Eyeconic <br /> <span>Cinema</span>
          </h2>
          <br /> <h4 className="text-danger">EXPERINCE MOVIES</h4>
        </Col>
        <Col xs={12} md={6} lg={3} className="pb-5">
          <div>
            <h6 className="text-muted">ABOUT US</h6>
            <p>Nulla porttitor accumsan tincidunt. Donec sollicitudin molestie malesuada. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Curabitur non nulla sit amet nisl</p>{" "}
          </div>{" "}
        </Col>
        <Col xs={12} md={6} lg={3} className="pb-5">
          <div>
            <h6 className="text-muted">MOVIES</h6>
            <ul>
              <li>Lorem ipsum dolor</li>
              <li>Lorem ipsum dolor</li>
              <li>Lorem ipsum dolor</li>
              <li>Lorem ipsum dolor</li>
            </ul>
          </div>
        </Col>

        <Col xs={12} md={6} lg={3} className="pb-5">
          <div>
            <h6 className="text-muted">INFO</h6>
            <ul>
              <li>Lorem ipsum dolor</li>
              <li>Lorem ipsum dolor</li>
              <li>Lorem ipsum dolor</li>
              <li>Lorem ipsum dolor</li>
            </ul>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Footer;
