import React, { useEffect } from "react";
import { Button, Image, Row, Container, Col } from "react-bootstrap";

import birds from "../../src/birds.jpg";
import Venom from "../../src/venom.jpg";
import Joke from "../../src/joker.jpg";
import Clean from "../../src/clean.jpg";
import jolly from "../../src/jolly.jpg";

function Movies() {
  return (
    <>
      <section id="nowplaying">
        <div className=" p-5">
          <h4 className="pt-5 mt-3  text-danger">NOW PLAYING</h4>

          <h1 className="mt-3 pb-4">
            <span className="font-weight-bolder">NOW</span> PLAYING
          </h1>

          <Button id="#btn-red" variant="danger" size="lg">
            <i class="fa fa-film" aria-hidden="true"></i> VIEW SHOWTIMES
          </Button>
        </div>
      </section>

      <section id="nowplayingmovies" className="pt-5 pb-5 mt-5 mb-5">
        <Container>
          <Row>
            <Col xs={12} md={6} lg={4} className="pb-5 mb-5">
              <Image src={birds} thumbnail />
              <br />
              <h6>movie title</h6>
              <p>
                time <br />
                Released date
              </p>
              <br />
              <Button className="text-center" variant="outline-danger">
                GET TICKETS
              </Button>
            </Col>

            <Col xs={12} md={6} lg={4}>
              <Image src={Joke} thumbnail />
              <br />
              <h6>movie title</h6>
              <p>
                time <br />
                Released date
              </p>
              <br />
              <Button className="text-center" variant="outline-danger">
                GET TICKETS
              </Button>
            </Col>

            <Col xs={12} md={6} lg={4}>
              <Image src={birds} thumbnail />
              <br />
              <h6>movie title</h6>
              <p>
                time <br />
                Released date
              </p>
              <br />
              <Button className="text-center" variant="outline-danger">
                GET TICKETS
              </Button>
            </Col>
          </Row>

          <Row className="pt-5 mt-5">
            <Col xs={12} md={6} lg={4}>
              <Image src={Clean} thumbnail />
              <br />
              <h6>movie title</h6>
              <p>
                time <br />
                Released date
              </p>
              <br />
              <Button className="text-center" variant="outline-danger">
                GET TICKETS
              </Button>
            </Col>

            <Col xs={12} md={6} lg={4}>
              <Image src={jolly} thumbnail />
              <br />
              <h6>movie title</h6>
              <p>
                time <br />
                Released date
              </p>
              <br />
              <Button className="text-center" variant="outline-danger">
                GET TICKETS
              </Button>
            </Col>

            <Col xs={12} md={6} lg={4}>
              <Image src={Clean} thumbnail />
              <br />
              <h6>movie title</h6>
              <p>
                time <br />
                Released date
              </p>
              <br />
              <Button className="text-center" variant="outline-danger">
                GET TICKETS
              </Button>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Movies;
