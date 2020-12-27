import React, { useEffect, useState } from "react";
import { Button, Image, Row, Container, Col } from "react-bootstrap";

function MovieInfos(movieData) {
  const [loading, setIsLoading] = useState("");
  const movie = movieData.movieData;

  return (
    <>
      <Col xs={12} md={6} lg={4} className="pb-5 mb-5">
        <Image src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${movie.poster_path}`} thumbnail />
        <br />
        <h6 className="pt-5">Title: {movie.title}</h6>
        <p>
          Release Date: {movie.release_date} <br />
          <small>Votes: {movie.vote_count}</small>
        </p>
        <br />
        <Button className="text-center" variant="outline-danger">
          GET TICKETS
        </Button>
      </Col>
    </>
  );
}

export default MovieInfos;
