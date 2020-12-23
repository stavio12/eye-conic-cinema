import React, { useEffect } from "react";
import { Container, Col, Row } from "react-bootstrap";

function Calender() {
  return (
    <>
      <section id="calender">
        <div className="pt-5 p-5">
          <h4 className="pt-5 mt-5 text-danger">NOW PLAYING</h4>

          <h1 className="mt-3 pb-4">
            MOVIE
            <span className="font-weight-bolder"> CALENDAR</span>
          </h1>
        </div>
      </section>

      <section id="schedule">
        <Container>
          <h1 className="pt-5 mt-5">Month</h1>

          <Row>
            <br />
            <Col xs={12} sm={8} md={4}>
              <h3>
                Lorem Ipsum <br />
                12:15p | 2:30 | 4:40
              </h3>
            </Col>
            <Col xs={12} sm={8} md={4}>
              <h3>
                Lorem Ipsum <br />
                12:15p | 2:30 | 4:40
              </h3>
            </Col>
            <Col xs={12} sm={8} md={4}>
              <h3>
                Lorem Ipsum <br />
                12:15p | 2:30 | 4:40
              </h3>
            </Col>
          </Row>

          <h1 className="pt-5 mt-5">Month</h1>

          <Row>
            <br />
            <Col xs={12} sm={8} md={4}>
              <h3>
                Lorem Ipsum <br />
                12:15p | 2:30 | 4:40
              </h3>
            </Col>
            <Col xs={12} sm={8} md={4}>
              <h3>
                Lorem Ipsum <br />
                12:15p | 2:30 | 4:40
              </h3>
            </Col>
            <Col xs={12} sm={8} md={4}>
              <h3>
                Lorem Ipsum <br />
                12:15p | 2:30 | 4:40
              </h3>
            </Col>
          </Row>

          <h1 className="pt-5 mt-5">Month</h1>

          <Row>
            <br />
            <Col xs={12} sm={8} md={4} className="pb-5 mb-5">
              <h3>
                Lorem Ipsum <br />
                12:15p | 2:30 | 4:40
              </h3>
            </Col>
            <Col xs={12} sm={8} md={4} className="pb-5 mb-5">
              <h3>
                Lorem Ipsum <br />
                12:15p | 2:30 | 4:40
              </h3>
            </Col>
            <Col xs={12} sm={8} md={4} className="pb-5 mb-5">
              <h3>
                Lorem Ipsum <br />
                12:15p | 2:30 | 4:40
              </h3>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Calender;
