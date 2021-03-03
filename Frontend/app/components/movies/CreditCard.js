import React, { useEffect, useState } from "react";
import { Button, Col, Modal, Form, Row } from "react-bootstrap";
import ThankyouModal from "./ThankyouModal";

function VisaModal(props) {
  const [details, setDetails] = useState("");
  const [name, setName] = useState("");
  const [zip, setZip] = useState("");
  const [cvv, setCvv] = useState("");
  const [expiry, setExpiry] = useState("");
  const [triger, setTriger] = useState(false);
  useEffect(() => {
    setDetails(JSON.parse(sessionStorage.getItem(props.title)));
  }, []);

  const Buy = (e) => {
    e.preventDefault();
    setTriger(true);
  };
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
                    <Form.Label>Zip</Form.Label>
                    <Form.Control type="number" onChange={(e) => setZip(e.target.value)} placeholder="zip" required /> <Form.Label>Expiry Date</Form.Label>
                    <Form.Control type="number" onChange={(e) => setExpiry(e.target.value)} placeholder="DD/YYYY" required /> <Form.Label>cvv</Form.Label>
                    <Form.Control type="number" onChange={(e) => setCvv(e.target.value)} required />{" "}
                  </Col>
                </Form.Row>
              </div>

              <Button id="btn-blue" size="lg" type="submit" block>
                Purchase Ticket
              </Button>
            </Form>
          </div>
        )}
      </Modal.Body>
    </>
  );
}

export default VisaModal;
