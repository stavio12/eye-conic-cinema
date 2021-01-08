import React, { useEffect, useContext } from "react";
import { Button, Image, Row, Container, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

import DispatchContext from "../DispatchContext";

function MovieInfos(movieData) {
  const movie = movieData.movieData;
  const appDispatch = useContext(DispatchContext);

  const viewmovie = (e) => {
    if (e.target.classList.contains("title")) {
      //print out movie ID
      const getID = e.target.parentElement;
      const ID = getID.querySelector("#ID").textContent;
      appDispatch({ type: "MOVIE", payload: { title: movie.title, id: ID } });
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
          <span className="d-none" id="ID">
            {movie.id}
          </span>
        </h6>
        <p>
          Release Date: {movie.release_date} <br />
          <small>Votes: {movie.vote_count}</small>
        </p>
        <br />

        {/* //Push movie id into link */}
        <Button className="text-center title" onClick={viewmovie} variant="outline-danger">
          <Link to={`/movies/${movie.id}`}>GET TICKETS</Link>
        </Button>
      </Col>
    </>
  );
}

export default MovieInfos;
