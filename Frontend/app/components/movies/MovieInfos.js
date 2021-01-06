import React, { useEffect, useState, useContext } from "react";
import { Button, Image, Row, Container, Col } from "react-bootstrap";
import { Link, Redirect, useParams } from "react-router-dom";

import DispatchContext from "../DispatchContext";
import StateContext from "../StateContext";

function MovieInfos(movieData) {
  const movie = movieData.movieData;
  // const [movieID, setMovieTtile] = useState();
  const appDispatch = useContext(DispatchContext);
  const appState = useContext(StateContext);

  useEffect(() => {}, [appState.movieID]);

  const viewmovie = (e) => {
    if (e.target.classList.contains("title")) {
      //print out movie title
      const getTitle = e.target.parentElement;
      const title = getTitle.querySelector("#title").textContent;

      console.log(title);
      //Push movie title into state
      appDispatch({ type: "movie", payload: title });
    }
  };

  return (
    <>
      <Col xs={12} md={6} lg={4} className="pb-5 mb-5" id="">
        <Image src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${movie.poster_path}`} thumbnail />
        <br />
        <h6 className="pt-5" data-title={movie.title}>
          Title:
          <span className="font-weight-bolder">{movie.title}</span>
          <span className="d-none" id="title">
            {movie.id}
          </span>
        </h6>
        <p>
          Release Date: {movie.release_date} <br />
          <small>Votes: {movie.vote_count}</small>
        </p>
        <br />
        {/* //Push movie title into link */}
        <Button as={Link} to={`/movies/${appState.movieID}`} className="text-center title" onClick={viewmovie} variant="outline-danger">
          GET TICKETS
        </Button>
      </Col>
    </>
  );
}

export default MovieInfos;
