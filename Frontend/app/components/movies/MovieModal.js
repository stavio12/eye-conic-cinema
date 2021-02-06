import React, { useEffect, useState } from "react";
import { Button, Col, Row, fieldset, Modal, Form } from "react-bootstrap";
import axios from "axios";
function MovieModal(props) {
  const [pcs, setPcs] = useState(1);
  const [cedis, setCedis] = useState(20);
  const [mall, setMall] = useState("accra");
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
    console.log(pcs, cedis, mall);
  };
  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header className="bg-dark text-center" closeButton>
        <Modal.Title id="contained-modal-title-vcenter">{props.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body className="bg-dark text-center">
        <h3 className="text-light">Select Location</h3>
        <br />
        <Form className="align-items-center">
          <fieldset>
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
          <br />
          <h3 className="text-light">Ticket Price</h3>
          <h1>{cedis}.00 Ghc</h1>
          <Button type="submit" onClick={Buy}>
            Confirm Ticket
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

export default MovieModal;
