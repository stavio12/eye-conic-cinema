import React, { useEffect, useContext, useState } from "react";
import Axios from "axios";
import DispatchContext from "../DispatchContext";
import StateContext from "../StateContext";
import { Button, Image, Row, Container, Col, Spinner, Modal } from "react-bootstrap";
import { useParams } from "react-router-dom";

function MyVerticallyCenteredModal(props) {
  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header className="bg-dark" closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Modal heading</Modal.Title>
      </Modal.Header>
      <Modal.Body className="bg-dark">
        <h4>Centered Modal</h4>
        <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
      </Modal.Body>
      <Modal.Footer className="bg-dark">
        <Button variant="outline-danger" onClick={props.onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

function MyCenteredModal(props) {
  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header className="bg-dark" closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Modal heading</Modal.Title>
      </Modal.Header>
      <Modal.Body className="bg-dark">
        <h4>Centered Modal</h4>
        <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio,.</p>
      </Modal.Body>
      <Modal.Footer className="bg-dark">
        <Button variant="outline-danger" onClick={props.onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

function MoviePage() {
  const appDispatch = useContext(DispatchContext);
  const appState = useContext(StateContext);
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
      appDispatch({ type: "MOVIE", payload: movies.title });
    };

    MovieFetch();
    time();
  }, [movies, id]);

  const buyTicket = () => {
    setModalShow(true);
    if (movies) {
      appDispatch({ type: "TICKET", payload: movies.title });
    }
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
            <MyCenteredModal show={modalShow} onHide={() => setModalShow(false)} />
            {/* {appState.LoggedIn ? : <MyVerticallyCenteredModal show={modalShow} onHide={() => setModalShow(false)} />} */}
          </Row>
        )}
      </Container>
    </>
  );
}

export default MoviePage;
