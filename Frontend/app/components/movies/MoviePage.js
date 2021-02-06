import React, { useEffect, useContext, useState } from "react";
import Axios from "axios";
import DispatchContext from "../DispatchContext";
import MovieModal from "./MovieModal";
import { Button, Image, Row, Container, Col, Spinner, Modal, Form } from "react-bootstrap";
import { useParams } from "react-router-dom";

function MoviePage() {
  const appDispatch = useContext(DispatchContext);
  const [movies, setMovies] = useState("");
  const [Loading, setIsLoading] = useState(true);
  const [modalShow, setModalShow] = useState(false);
  const [runtime, setRuntime] = useState(0);
  let { id } = useParams();

  //Setting run time
  const time = (num) => {
    var hours = Math.floor(num / 60);
    var minutes = num % 60;
    return `${hours} hrs : ${minutes} mins`;
  };

  useEffect(() => {
    const MovieFetch = async () => {
      //search for movie using Id in Params
      const response = await Axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=8f864e2ec8c367dffca6741f68c59409`);
      const data = await response.data;
      setMovies(data);

      setRuntime(time(data.runtime));

      setIsLoading(false);
    };

    MovieFetch();
    time();
  }, [movies, id]);

  const buyTicket = () => {
    setModalShow(true);
  };

  return (
    <>
      <Container>
        {Loading ? (
          <h3 className="text-center">
            <Spinner animation="border" />
            Loading Please Wait
          </h3>
        ) : (
          <Row>
            <Col xs={12} md={6}>
              <Image src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${movies.poster_path}`} thumbnail />
            </Col>
            <Col xs={12} md={6}>
              <h1> {movies.title}</h1>
              <br />
              <p>{movies.overview}</p>
              <br />
              <h3>
                Time <br />
              </h3>
              <h5 className="pb-5">
                <small>
                  Mon - Fri <br />
                  10:00 am | 12:30 pm | 4:40 pm | 7:00 pm
                </small>
                <br />
                <small className="pt-5">
                  Sat - Sun <br />
                  9:00 am | 11:30 am| 1:40 pm | 3:30 pm | 9:00 pm
                </small>
                <br />
              </h5>
              <h5>Runtime: {runtime}</h5>
              <Button className="text-center title" onClick={buyTicket} variant="outline-danger" block>
                BUY TICKETS
              </Button>
            </Col>
            <MovieModal show={modalShow} title={movies.title} onHide={() => setModalShow(false)} />
            {/* {appState.LoggedIn ? : <MyVerticallyCenteredModal show={modalShow} onHide={() => setModalShow(false)} />} */}
          </Row>
        )}
      </Container>
    </>
  );
}

export default MoviePage;
