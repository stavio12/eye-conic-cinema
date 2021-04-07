import React, { useEffect, useState, useContext } from "react";
import { Button, Col, Modal, Form, Row, Spinner } from "react-bootstrap";
import axios from "axios";
import ThankyouModal from "./ThankyouModal";
import StateContext from "../StateContext";

function VisaModal(props) {
  const [details, setDetails] = useState("");
  const [name, setName] = useState("");
  const [movie, setMovie] = useState("");
  const [cvv, setCvv] = useState("");
  const [expiry, setExpiry] = useState("");
  const [trigger, setTrigger] = useState(false);
  const [Url, setURL] = useState("");

  const [loading, setLoading] = useState(false);
  const appState = useContext(StateContext);

  useEffect(() => {
    setMovie(JSON.parse(sessionStorage.getItem(props.title)));
    setDetails(JSON.parse(sessionStorage.getItem(props.id)));
    if (appState.user._id === undefined) {
      setURL("https://eyeconic-cinema.herokuapp.com/active-orders/guest");
    } else {
      setURL("https://eyeconic-cinema.herokuapp.com/active-orders");
    }
  }, [appState.user]);

  const Buy = async (e) => {
    e.preventDefault();
    if (!name.length === "") {
      document.querySelector(".phone").style.borderColor = "red";
    } else if (!cvv.length === 3) {
      document.querySelector(".phone").style.borderColor = "red";
    } else if (!expiry.length === 5) {
      document.querySelector(".phone").style.borderColor = "red";
    }
    setLoading(true);
    console.log("This Called");
    try {
      console.log({ movieId: details.id, movie: details.movies.title, runtime: details.runtime, pcs: movie.pcs, payment: movie.payment, amount: movie.amount, mall: movie.mall, view: "active" });

      const res = await axios({
        method: "post",
        url: URL,
        withCredentials: true,
        credentials: "include",
        data: {
          id: appState.user._id,
          movie: [
            {
              movieId: details.id,
              movie: details.movies.title,
              runtime: details.runtime,
              pcs: movie.pcs,
              payment: movie.payment,
              amount: movie.amount,
              mall: movie.mall,
              view: "active",
            },
          ],
        },
      });
      console.log("or In here");

      setLoading(false);
      setTrigger(true);
    } catch (error) {
      console.log(error);
      setLoading(false);
      showAlert("danger", error.response.data.message);
    }
  };
  return (
    <>
      <Modal.Body className="bg-dark text-center">
        {trigger ? (
          <ThankyouModal title={props.title} name={name} />
        ) : (
          <div>
            <Row>
              {" "}
              <Col xs="auto">Location: {movie.mall}</Col>
              <Col xs="auto">Price: {movie.cedis} GHC</Col>
              <Col xs="auto">Pcs: {movie.pcs} </Col>
            </Row>
            <Form onSubmit={Buy}>
              <div className="offset-3 pb-3 pt-3">
                <Form.Row>
                  <Col xs="auto">
                    <Form.Label>Name On Card</Form.Label>
                    <Form.Control type="text" onChange={(e) => setName(e.target.value)} placeholder="john Doe" required />{" "}
                  </Col>
                  <Col xs="auto">
                    <Form.Label>Expiry Date</Form.Label>
                    <Form.Control type="number" onChange={(e) => setExpiry(e.target.value)} placeholder="DD/YYYY" required /> <Form.Label>cvv</Form.Label>
                    <Form.Control type="number" onChange={(e) => setCvv(e.target.value)} required />{" "}
                  </Col>
                </Form.Row>
              </div>

              {loading ? (
                <Button id="btn-blue" size="lg" className={trigger ? "disabled" : ""} type="submit" block>
                  <Spinner animation="border" variant="secondary" /> Purchasing Please Wait.....
                </Button>
              ) : (
                <Button id="btn-blue" size="lg" type="submit" block>
                  Purchase Ticket
                </Button>
              )}
            </Form>
          </div>
        )}
      </Modal.Body>
    </>
  );
}

export default VisaModal;
