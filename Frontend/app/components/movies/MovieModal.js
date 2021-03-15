import React, { useEffect, useState } from "react";
import { Button, Col, Modal, Form } from "react-bootstrap";
import MomoModal from "./MomoModal";
import CreditCard from "./CreditCard";

function MovieModal(props) {
  const [pcs, setPcs] = useState(1);
  const [cedis, setCedis] = useState(20);
  const [mall, setMall] = useState();
  const [payment, setPayment] = useState();
  const [momo, setMomo] = useState(false);
  const [creditCard, setCreditCard] = useState(false);
  const [buyModal, setBuyModal] = useState(true);

  const more = () => {
    setPcs(pcs + 1);
    setCedis(cedis + 20);
  };
  const less = () => {
    setPcs(pcs - 1);
    setCedis(cedis - 20);
  };

  const Buy = (e) => {
    e.preventDefault();
    //Save info into session storage
    sessionStorage.setItem(props.title, JSON.stringify({ pcs, cedis, mall, payment }));

    if (payment === "Credit Card") {
      setBuyModal(false);
      setCreditCard(true);
    } else {
      setBuyModal(false);

      setMomo(true);
    }
  };
  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header className="bg-dark text-center" closeButton>
        <Modal.Title id="contained-modal-title-vcenter">{props.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body className={buyModal ? "bg-dark text-center" : "d-none"}>
        <h3 className="text-light">Select Location</h3>
        <br />
        <Form className="align-items-center">
          <fieldset className="offset-3">
            <Form.Row>
              <Col xs="auto">
                <Form.Check
                  type="radio"
                  onChange={(e) => {
                    setMall(e.target.value);
                  }}
                  value="Accra Mall"
                  label="Accra Mall"
                  name="formHorizontalRadios"
                  id="formHorizontalRadios1"
                />
              </Col>
              <Col xs="auto">
                <Form.Check
                  type="radio"
                  onChange={(e) => {
                    setMall(e.target.value);
                  }}
                  value="West Hills Mall"
                  label="West Hills Mall"
                  name="formHorizontalRadios"
                  id="formHorizontalRadios2"
                />
              </Col>
            </Form.Row>
          </fieldset>
          <br />
          <h3 className="text-light">Number of Tickets</h3>
          <div className="offset-4">
            <Form.Row>
              <Col xs="auto">
                <Button onClick={less}>-</Button>
              </Col>
              <Col xs="auto">
                <Form.Control className="form-number text-center" type="number" value={pcs} disabled />
              </Col>
              <Col xs="auto">
                <Button onClick={more}>+</Button>
              </Col>
            </Form.Row>
          </div>
          <br />
          <h3 className="text-light">Ticket Price</h3>
          <h1>{cedis}.00 Ghc</h1>

          <h3>Select Payment</h3>
          <fieldset className="offset-3 pb-5">
            <Form.Row>
              <Col xs="auto">
                <Form.Check
                  type="radio"
                  onChange={(e) => {
                    setPayment(e.target.value);
                  }}
                  value="Credit Card"
                  label="Credit Card"
                  name="formHorizontal"
                  id="formHorizontal"
                />
              </Col>
              <Col xs="auto">
                <Form.Check
                  type="radio"
                  onChange={(e) => {
                    setPayment(e.target.value);
                  }}
                  value="Mobile Money"
                  label="Mobile Money"
                  name="formHorizontal"
                  id="formHorizontal"
                />
              </Col>
            </Form.Row>
          </fieldset>
          <Button type="submit" onClick={Buy}>
            Confirm Ticket
          </Button>
        </Form>
      </Modal.Body>
      {momo && <MomoModal id={props.id} title={props.title} />} {creditCard && <CreditCard id={props.id} title={props.title} />}
    </Modal>
  );
}

export default MovieModal;
