import React from "react";
import { Button, Container, Col, Row, Card } from "react-bootstrap";
import { Link, Redirect } from "react-router-dom";

function Membership() {
  return (
    <>
      <section id="membership" className="pb-5 mb-5">
        <div className="pt-5 p-5 text-center">
          <h4 className="pt-5 mt-5 text-danger">THEATER PASSES</h4>

          <h1 className="mt-3 pb-4">
            ALL ACCESS{" "}
            <span className="font-weight-bolder">
              MOVIE <br /> PASSES
            </span>
          </h1>

          <Button id="btn-red" variant="danger" size="lg">
            <span className="text-white pb-5">
              <i className="fa fa-user" aria-hidden="true"></i> JOIN TODAY
            </span>
          </Button>
        </div>
      </section>

      <section id="packages">
        <Container className="pt-5 mt-5">
          <Row className="text-center ">
            <Col fluid="true" xs={{ span: 12 }} sm={{ span: 10, offset: 2 }} md={{ span: 8, offset: 2 }} lg={{ span: 4, offset: 0 }} className="pb-5 mb-5">
              <Card style={{ width: "18rem" }} className="border card-bg mx-5 p-4 border-secondary text-left">
                <Card.Body>
                  <Card.Title>
                    <h3 className="pt-3">Movie Go’er</h3>
                  </Card.Title>
                  <Card.Text>
                    Nulla quis lorem ut libero malesuada feugiat. Sed porttitor lectus nibh. Vivamus suscipit tortor eget felis porttitor volutpat. Donec rutrum congue leo eget malesuada. Donec sollicitudin molestie malesuada. Quisque velit nisi, pretium ut lacinia in, elementum id enim. <br />
                  </Card.Text>
                  <Button as={Link} to="/membership/movie-go/signup" variant="outline-dark">
                    JOIN TODAY
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col fluid="true" xs={{ span: 12 }} sm={{ span: 10, offset: 2 }} md={{ span: 8, offset: 2 }} lg={{ span: 4, offset: 0 }} className="pb-5 mb-5">
              <Card style={{ width: "18rem" }} className="border card-bg mx-5 p-4 border-blue text-left">
                <Card.Body>
                  <Card.Title>
                    <h3 className="pt-3">Family Pass</h3>
                  </Card.Title>
                  <Card.Text>
                    Nulla quis lorem ut libero malesuada feugiat. Sed porttitor lectus nibh. Vivamus suscipit tortor eget felis porttitor volutpat. Donec rutrum congue leo eget malesuada. Donec sollicitudin molestie malesuada. Quisque velit nisi, pretium ut lacinia in, elementum id enim. <br />
                  </Card.Text>
                  <Button as={Link} to="/membership/movie-family-pass/signup" variant="outline-primary">
                    JOIN TODAY
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col fluid="true" xs={{ span: 12 }} sm={{ span: 10, offset: 2 }} md={{ span: 8, offset: 2 }} lg={{ span: 4, offset: 0 }} className="pb-5 mb-5">
              <Card style={{ width: "18rem" }} className="border card-bg mx-5 p-4 border-danger text-left">
                <Card.Body>
                  <Card.Title>
                    <h3 className="pt-3">Movie Lover</h3>
                  </Card.Title>
                  <Card.Text>
                    Nulla quis lorem ut libero malesuada feugiat. Sed porttitor lectus nibh. Vivamus suscipit tortor eget felis porttitor volutpat. Donec rutrum congue leo eget malesuada. Donec sollicitudin molestie malesuada. Quisque velit nisi, pretium ut lacinia in, elementum id enim. <br />
                  </Card.Text>
                  <Button as={Link} to="/membership/movie-lover/signup" variant="outline-danger">
                    JOIN TODAY
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      <section id="packages-compare" className="pb-5">
        <div className="text-center pb-3">
          <h3 className="pt-5 mt-1 text-danger">MEMBERSHIP PERKS</h3>
          <h1>Compare</h1>
        </div>

        <Container>
          <div className="border border-blue text-center ">
            <Row className=" text-left mx-5">
              <Col xs={12} sm={12} md={{ span: 6 }} lg={{ span: 3 }} className="mx-auto pb-5 mb-5">
                <h4 className="pt-5 mt-1">Movie Go’er</h4>
                <ul>
                  <li className="check">Sed Ut Perspicatis</li>
                  <li className="check">Lorem Ipsum</li>
                  <li className="text-muted">Dolor Amet Sit</li>
                  <li className="text-muted">Architector Vitae</li>
                  <li className="text-muted">Dicta Sunt</li>
                  <li className="text-muted">Omnis Iste Natus</li>
                  <li className="text-muted">Quae Ab Illo</li>
                </ul>
                <Button as={Link} to="/membership/movie-go/signup" variant="outline-dark">
                  JOIN TODAY
                </Button>
              </Col>

              <Col xs={12} sm={12} md={{ span: 6 }} lg={{ span: 3 }} className="mx-auto pb-5 mb-5">
                <h4 className="pt-5 mt-1">Family Pass</h4>
                <ul>
                  <li className="check">Sed Ut Perspicatis</li>
                  <li className="check">Lorem Ipsum</li>
                  <li className="check">Dolor Amet Sit</li>
                  <li className="text-muted">Architector Vitae</li>
                  <li className="text-muted">Dicta Sunt</li>
                  <li className="text-muted">Omnis Iste Natus</li>
                  <li className="check">Quae Ab Illo</li>
                </ul>
                <Button as={Link} to="/membership/movie-family-pass/signup" variant="outline-primary">
                  JOIN TODAY
                </Button>
              </Col>

              <Col id="check" xs={12} sm={12} md={{ span: 6 }} lg={{ span: 3 }} className="mx-auto pb-5 mb-5">
                <h4 className="pt-5 mt-1">Movie Lover</h4>
                <ul>
                  <li>Sed Ut Perspicatis</li>
                  <li>Lorem Ipsum</li>
                  <li>Dolor Amet Sit</li>
                  <li>Architector Vitae</li>
                  <li>Dicta Sunt</li>
                  <li>Omnis Iste Natus</li>
                  <li>Quae Ab Illo</li>
                </ul>
                <Button as={Link} to="/membership/movie-lover/signup" variant="outline-danger">
                  JOIN TODAY
                </Button>
              </Col>

              <Col xs={12} sm={12} md={{ span: 6 }} lg={{ span: 3 }} className="mx-auto pb-5 mb-5">
                <h4 className="pt-5 mt-1 text-danger">HOW IT WORKS</h4>
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
              </Col>
            </Row>
          </div>
        </Container>
      </section>
    </>
  );
}

export default Membership;
