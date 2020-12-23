import React, { useEffect } from "react";
import { Button, Container, Col, Row, Form, FormControl } from "react-bootstrap";

function About() {
  return (
    <>
      <section id="aboutus">
        <div className="p-5">
          <h4 className="pt-5 mt-3 text-muted">OUR THEATER</h4>

          <h1 className="mt-3 pb-4">
            <span className="font-weight-bolder">ABOUT </span> US
          </h1>

          <Button id="btn-red" size="lg" variant="danger">
            <i class="fa fa-film" aria-hidden="true"></i> FIND SHOWTIMES
          </Button>
        </div>
      </section>

      <section className="aboutus mx-auto text-left  pt-5 mt-5">
        <Container fluid>
          <Row>
            <Col xs={12} sm={4} className="text-center">
              <h4 className="deep-blue">ABOUT US</h4> <br />
              <h1>
                All the <span className="font-weight-bolder">Perks</span>
              </h1>
              <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
            </Col>

            <Col xs={12} sm={8}>
              <div className="border border-blue ml-3">
                <Container>
                  <Row className="m-4">
                    <Col xs={12} sm={12} md={6}>
                      <h4>Amazing Theaters</h4>
                      <br />
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                    </Col>
                    <Col xs={12} sm={12} md={6}>
                      <h4>Pre Order Food</h4>
                      <br />
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                    </Col>
                    <Col xs={12} sm={12} md={6}>
                      <h4>Comfort Amenities</h4>
                      <br />
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                    </Col>
                    <Col xs={12} sm={12} md={6}>
                      <h4>Movie Go’er Rewards</h4>
                      <br />
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>{" "}
                    </Col>
                    <Col xs={6}>
                      <h4>Artisan Snacks</h4>
                      <br />
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>{" "}
                    </Col>
                  </Row>
                </Container>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section id="story" className="pt-5">
        <Container>
          <Row>
            <Col xs={8} className="text-center mx-auto">
              <div className="text-break">
                <h4 className="text-danger">OUR STORY</h4>
                <p className="text-muted">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section id="viewers" className="pb-5 pt-5 text-center">
        <div>
          <h4 className="text-danger">HAPPY VIEWERS</h4> <br />
          <h1>
            Why <span>Choose US</span>
          </h1>
        </div>
        <Container>
          <Row className="text-center ">
            <Col xs={12} sm={{ span: 10, offset: 2 }} md={{ span: 8, offset: 2 }} lg={{ span: 4, offset: 0 }}>
              <div className="border border-3 border-secondary text-left mx-5 p-4 m-5">
                <h3 className="pt-5">
                  <i class="fa fa-quote-left text-muted" aria-hidden="true"></i>
                </h3>
                <br />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
              </div>
            </Col>
            <Col xs={12} sm={{ span: 10, offset: 2 }} md={{ span: 8, offset: 2 }} lg={{ span: 4, offset: 0 }}>
              <div className="border border-3 border-blue text-left mx-5 p-4 m-5">
                <h3 className="pt-5">
                  <i class="fa fa-quote-left text-muted" aria-hidden="true"></i>
                </h3>
                <br />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
              </div>
            </Col>
            <Col xs={12} sm={{ span: 10, offset: 2 }} md={{ span: 8, offset: 2 }} lg={{ span: 4, offset: 0 }}>
              <div className="border border-3 border-danger text-left mx-5 p-4 m-5">
                <h3 className="pt-5">
                  <i class="fa fa-quote-left text-muted" aria-hidden="true"></i>
                </h3>
                <br />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default About;
