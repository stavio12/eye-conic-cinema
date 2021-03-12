import React, { useEffect, useState, useContext } from "react";
import { Button, Col, Modal, Form, Image, Row, Spinner } from "react-bootstrap";
import voda from "../../src/vodafone.png";
import airteltigo from "../../src/airteltigo.png";
import mtn from "../../src/mtn.png";
import ThankyouModal from "./ThankyouModal";
import axios from "axios";
import StateContext from "../StateContext";

function MomoModal(props) {
  const [details, setDetails] = useState("");
  const [movie, setMovie] = useState("");
  const [number, setNumber] = useState("");
  const [network, setNetwork] = useState("");
  const [Url, setURL] = useState("http://localhost:4000/active-orders/guest");
  const [trigger, setTrigger] = useState(false);
  const [loading, setLoading] = useState(false);
  const appState = useContext(StateContext);

  useEffect(() => {
    setMovie(JSON.parse(sessionStorage.getItem(props.title)));
    setDetails(JSON.parse(sessionStorage.getItem(props.id)));
    appState.user._id ? setURL("http://localhost:4000/active-orders") : "";

    const networkSwitch = () => {
      if (number.startsWith("057" || "026" || "056" || "027")) {
        setNetwork(airteltigo);
      } else if (number.startsWith("054" || "024" || "055")) {
        setNetwork(mtn);
      } else if (number.startsWith("050" || "020")) {
        setNetwork(voda);
      }
    };

    return networkSwitch();
  }, [number, appState.user]);
  const Buy = async (e) => {
    e.preventDefault();

    if (!(number.length === 10)) {
      document.querySelector(".phone").style.borderColor = "red";
    } else if (!network == "") {
      document.querySelector(".phone").style.borderColor = "red";
    } else {
      document.querySelector(".phone").style.borderColor = "green";
    }
    setLoading(true);
    console.log(details, movie);
    console.log("This Called");
    console.log(Url);
    try {
      const res = await axios({
        method: "post",
        url: Url,
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
    }

    // setTimeout(function () {
    //   setTrigger(false);
    // }, 10000);
    // return (window.location = "/movies");
  };

  return (
    <>
      <Modal.Body className="bg-dark text-center">
        {trigger ? (
          <ThankyouModal title={props.title} />
        ) : (
          <div>
            <Row>
              <Col xs="auto">Location: {movie.mall}</Col>
              <Col xs="auto">Price: {movie.cedis} GHC</Col>
              <Col xs="auto">Pcs: {movie.pcs} </Col>
            </Row>
            <Form onSubmit={Buy}>
              <div className="offset-2 pb-3 pt-3">
                <Form.Row>
                  <Col xs="auto">
                    <Image className="network" src={network} roundedCircle disabled />
                  </Col>
                  <Col xs="auto">
                    <Form.Control className="phone" type="number" onChange={(e) => setNumber(e.target.value)} placeholder="Your Mobile Number" required />{" "}
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

export default MomoModal;
