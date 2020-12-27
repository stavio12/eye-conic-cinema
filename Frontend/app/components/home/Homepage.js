import React, { useEffect, useState } from "react";
import { Carousel, Image, Container, Row, Col, Button } from "react-bootstrap";
import Axios from "axios";
import { Link } from "react-router-dom";

import Upcoming from "./Upcoming";
import Joke from "../../src/joker.jpg";

function Homepage() {
  const [upcoming, setUpcoming] = useState([]);

  useEffect(() => {
    try {
      const MovieFetch = Axios.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.MOVIEAPI}`).then(async (response) => {
        const data = await response.data.results;
        setUpcoming(data);
      });
    } catch (error) {
      console.log(error);
    }

    // console.log(movies);
  }, []);

  return (
    <>
      <section id="carousel" className="pb-5">
        <Carousel>
          <Carousel.Item id="slide-head" interval={1000}>
            <div id="slider-home">
              <div className="w-75 mx-auto p-5">
                <h1 className="pt-0 pt-md-5">WELCOME TO EYECONIC CINEMA</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <Button id="btn-red" variant="danger" size="lg">
                  <Link className="text-white" to="/movies">
                    <i class="fa fa-film" aria-hidden="true"></i> VIEW SHOWTIMES
                  </Link>{" "}
                </Button>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item id="slide-head" interval={2000}>
            <div id="slider-2">
              <div className="w-75 mx-auto p-5">
                <h1 className="pt-0 pt-md-5">PRE ORDER REFRESHMENTS</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <Button id="btn-red" variant="danger" size="lg">
                  <Link className="text-white" to="/snacks">
                    <i class="fa fa-film" aria-hidden="true"></i> MENU
                  </Link>{" "}
                </Button>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item id="slide-head" interval={3000}>
            <div id="slider-3">
              <div className="w-75 mx-auto p-5">
                <h1 className="pt-0 pt-md-5 mt-0 mt-md-5">MOVIE PASS CLUB</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                <Button id="btn-red" variant="danger" size="lg">
                  <Link className="text-white" to="/membership">
                    <i class="fa fa-film" aria-hidden="true"></i> JOIN TODAY
                  </Link>{" "}
                </Button>
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
      </section>

      <section id="buttons-tickets" className="text-center pt-5 pb-5">
        <Container>
          <Row>
            <Col xs={12} sm={12} md={4} className="pb-5">
              <Button variant="outline-danger" size="lg">
                <Link className="text-white" to="/tickets">
                  BUY TICKETS
                </Link>{" "}
              </Button>
            </Col>

            <Col xs={12} sm={12} md={4} className="pb-5">
              <Button variant="outline-danger" size="lg">
                <Link className="text-white" to="/movies">
                  VIEW SHOWTIMES
                </Link>{" "}
              </Button>
            </Col>

            <Col xs={12} sm={12} md={4} className="pb-5">
              <Button variant="outline-danger" size="lg">
                <Link className="text-white" to="/snacks">
                  PRE-ORDER SNACKS
                </Link>{" "}
              </Button>
            </Col>
          </Row>
        </Container>
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

      <section id="playing" className="pt-5 pb-5 mt-5 mb-5 text-center">
        <Container>
          <Row>
            <Col xs={12} md={12} lg={6} fluid>
              <Image id="joke" src={Joke} />
            </Col>

            <Col xs={12} md={12} lg={6} fluid className="pt-5 mt-5">
              <h5 className="text-danger">PLAYING</h5>
              <br />
              <h1>
                Now in <span>Cinemas</span>{" "}
              </h1>{" "}
              <br />
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              <Button id="btn-red" variant="danger" size="lg">
                <Link className="text-white" to="/movies">
                  <i class="fa fa-film" aria-hidden="true"></i> VIEW ALL
                </Link>
              </Button>
            </Col>
          </Row>
        </Container>
      </section>

      <section id="coming-soon" className="pt-5 pb-5 mt-5 mb-5">
        <Container>
          <Row>
            <Col>
              <h4 className="text-danger">COMING SOON</h4>
              <h1>
                Movies <span className="font-weight-bolder">Coming Soon</span>
              </h1>
              <Carousel className="coming-soon">
                {upcoming.map((soon) => {
                  return (
                    <Carousel.Item interval={1000}>
                      <img className="d-block mx-auto" id="slider-img" src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${soon.poster_path}`} alt="First slide" />
                      <Carousel.Caption>
                        <h3>{soon.title}</h3>
                        <p>{soon.release_date}</p>
                      </Carousel.Caption>
                    </Carousel.Item>
                  );
                })}
              </Carousel>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Homepage;
