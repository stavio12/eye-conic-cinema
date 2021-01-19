import React, { useEffect, useContext } from "react";
import { Button, Image, Row, Container, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

function MovieInfos(movieData) {
  const movie = movieData.movieData;

  return (
    <>
      <Col xs={12} md={6} lg={4} className="pb-5 mb-5 text-center text-lg-left">
        <Image src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${movie.poster_path}`} thumbnail />
        <br />
        <h6 className="pt-5 " data-title={movie.title}>
          Title:
          <span className="font-weight-bolder">{movie.title}</span>
        </h6>
        <p>
          Release Date: {movie.release_date} <br />
          <small>Votes: {movie.vote_count}</small>
        </p>
        <br />

        {/* //Push movie id into link */}
        <Button as={Link} to={`/movies/${movie.id}`} className="text-center title" variant="outline-danger">
          GET TICKETS
        </Button>
      </Col>
    </>
  );
}

export default MovieInfos;
