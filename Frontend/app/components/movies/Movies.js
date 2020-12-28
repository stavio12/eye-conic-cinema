import React, { useEffect, useState, useContext } from "react";
import { Button, Image, Row, Container, Col } from "react-bootstrap";
import Axios from "axios";

import MovieInfos from "./MovieInfos";

import DispatchContext from "../DispatchContext";

function Movies() {
  const [movies, setMovies] = useState([]);
  const appDispatch = useContext(DispatchContext);

  useEffect(() => {
    try {
      const MovieFetch = Axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=8f864e2ec8c367dffca6741f68c59409&primary_release_date.gte=2020-10-01&primary_release_date.lte=2021-10-22`).then(async (response) => {
        const data = await response.data.results;

        setMovies(data);
      });
    } catch (error) {
      console.log(error);
      // appDispatch({ type: "ERROR", payload: "Helo wossop" });
    }

    // console.log(movies);
  }, []);

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
          <Row>
            {movies.map((movieData, id) => {
              return <MovieInfos key={id} movieData={movieData} />;
            })}
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Movies;
