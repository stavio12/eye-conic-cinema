import React, { useEffect, useState, useContext } from "react";
import { Button, Image, Row, Container, Col } from "react-bootstrap";
import { Link, Redirect, useParams } from "react-router-dom";

import DispatchContext from "../DispatchContext";

function MovieInfos(movieData) {
  const movie = movieData.movieData;

  const appDispatch = useContext(DispatchContext);

  const viewmovie = (e) => {
    if (e.target.classList.contains("title")) {
      //print out movie title
      const getTitle = e.target.parentElement;
      const movieTitle = getTitle.querySelector("#title").textContent;

      console.log(movieTitle);
      //Direct user to ticket page
      appDispatch({ type: "movie", payload: movieTitle });

      // window.location = `/movies/:${movieTitle}`;
    }
  };

  return (
    <>
      {movie ? (
        <Col xs={12} md={6} lg={4} className="pb-5 mb-5" id="">
          <Image src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${movie.poster_path}`} thumbnail />
          <br />
          <h6 className="pt-5" data-title={movie.title}>
            Title:{" "}
            <span className="font-weight-bolder" id="title">
              {movie.title}
            </span>
          </h6>
          <p>
            Release Date: {movie.release_date} <br />
            <small>Votes: {movie.vote_count}</small>
          </p>
          <br />
          <Button className="text-center title" onClick={viewmovie} variant="outline-danger">
            GET TICKETS
          </Button>
        </Col>
      ) : (
        <Col xs={12} md={6} lg={4} className="pb-5 mb-5">
          <Image src={`....`} thumbnail />
          <br />
          <h6 className="pt-5">Title: ...</h6>
          <p>
            Release Date: ... <br />
            <small>Votes: ...</small>
          </p>
          <br />
          <Button className="text-center disabled" variant="outline-danger">
            GET TICKETS
          </Button>
        </Col>
      )}
    </>
  );
}

export default MovieInfos;
