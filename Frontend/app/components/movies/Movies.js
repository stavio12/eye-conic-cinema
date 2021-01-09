import React, { useEffect, useState, useContext } from "react";
import { Button, Image, Row, Container, Col, Spinner } from "react-bootstrap";
import Axios from "axios";

import MovieInfos from "./MovieInfos";

import DispatchContext from "../DispatchContext";

function Movies() {
  const [movies, setMovies] = useState([]);
  const [Loading, setIsLoading] = useState();

  const appDispatch = useContext(DispatchContext);

  useEffect(() => {
    setIsLoading(true);

    const MovieFetch = Axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.MOVIEAPI}&primary_release_date.gte=2020-10-01&primary_release_date.lte=2021-10-22`).then(async (response) => {
      const data = await response.data.results;
      setIsLoading(false);
      setMovies(data);
    });
  }, [Loading]);

  return (
    <>
      <section id="nowplaying">
        <div className=" p-5">
          <h4 className="pt-5 mt-3  text-danger">NOW PLAYING</h4>

          <h1 className="mt-3 pb-4">
            <span className="font-weight-bolder">NOW</span> PLAYING
          </h1>

          <Button id="#btn-red" variant="danger" size="lg">
            <i className="fa fa-film" aria-hidden="true"></i> VIEW SHOWTIMES
          </Button>
        </div>
      </section>

      <section id="nowplayingmovies" className="pt-5 pb-5 mt-5 mb-5">
        <Container>
          {Loading ? (
            <Row>
              {movies.map((movieData, id) => {
                return <MovieInfos key={id} movieData={movieData} />;
              })}
            </Row>
          ) : (
            <h3 className="text-center">
              <Spinner animation="border" />
              Loading Please Wait
            </h3>
          )}{" "}
        </Container>
      </section>
    </>
  );
}

export default Movies;
