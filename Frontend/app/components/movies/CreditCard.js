import React, { useEffect, useState, useContext } from "react";
import { Button, Col, Modal, Form, Row } from "react-bootstrap";
import ThankyouModal from "./ThankyouModal";
import StateContext from "../StateContext";

function VisaModal(props) {
  const [details, setDetails] = useState("");
  const [name, setName] = useState("");
  const [cvv, setCvv] = useState("");
  const [expiry, setExpiry] = useState("");
  const [triger, setTrigger] = useState(false);
  const [Url, setURL] = useState("http://localhost:4000/active-orders/guest");

  const [loading, setLoading] = useState(false);
  const appState = useContext(StateContext);

  useEffect(() => {
    setMovie(JSON.parse(sessionStorage.getItem(props.title)));
    setDetails(JSON.parse(sessionStorage.getItem(props.id)));
    appState.user._id ? setURL("http://localhost:4000/active-orders") : "";

     }, [appState.user]);

  const Buy = async (e) => {
    e.preventDefault();
    if(!name.length === ""){
      document.querySelector(".phone").style.borderColor = "red";

    }else if(!cvv.length === 3){
      document.querySelector(".phone").style.borderColor = "red";

    }else if(!expiry.length === 5){
      document.querySelector(".phone").style.borderColor = "red";

    }else{
      document.querySelector(".phone").style.borderColor = "green";

    }
    setLoading(true);
    console.log(details, movie);
    console.log("This Called");
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
    }  };
  return (
    <>
      <Modal.Body className="bg-dark text-center">
        {triger ? (
          <ThankyouModal title={props.title} name={name} />
        ) : (
          <div>
            <Row>
              <Col xs="auto">Location: {details.mall}</Col>
              <Col xs="auto">Price: {details.cedis} GHC</Col>
              <Col xs="auto">Pcs: {details.pcs} </Col>
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
