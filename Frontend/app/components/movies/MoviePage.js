import React, { useEffect, useContext, useState } from "react";
import Axios from "axios";
import DispatchContext from "../DispatchContext";
import StateContext from "../StateContext";
import { Button, Image, Row, Container, Col, Spinner } from "react-bootstrap";
import { useParams } from "react-router-dom";

function MoviePage() {
  const appDispatch = useContext(DispatchContext);
  const appState = useContext(StateContext);
  const [movies, setMovies] = useState("");
  const [Loading, setIsLoading] = useState();
  let { id } = useParams();

  useEffect(() => {
    setIsLoading(true);

    //search for movie using Id saved in state or params(in case there is refreshing)
    const MovieFetch = Axios.get(`https://api.themoviedb.org/3/movie/${appState.movie.id || id}?api_key=${process.env.MOVIEAPI}`).then(async (response) => {
      const data = await response.data;
      setIsLoading(false);
      setMovies(data);
    });
  }, [Loading, movies, id]);

  const buyTicket = () => {
    if (movies) {
      appDispatch({ type: "TICKET", payload: movies.title });
    }
  };

  return (
    <>
      <Container>
        {Loading ? (
          <Row>
            <Col>
              <Image src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${movies.poster_path}`} thumbnail />
            </Col>
            <Col>
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
              <Button className="text-center title" onClick={buyTicket} variant="outline-danger" block>
                BUY TICKETS
              </Button>
            </Col>
          </Row>
        ) : (
          <h3 className="text-center">
            <Spinner animation="border" />
            Loading Please Wait
          </h3>
        )}
      </Container>
    </>
  );
}

export default MoviePage;
