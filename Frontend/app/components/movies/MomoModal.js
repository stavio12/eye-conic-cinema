import React, { useEffect, useState } from "react";
import { Button, Col, Modal, Form, Image, Row } from "react-bootstrap";
import voda from "../../src/vodafone.png";
import airteltigo from "../../src/airteltigo.png";
import mtn from "../../src/mtn.png";
import DispatchContext from "../DispatchContext";
import StateContext from "../StateContext";
function MomoModal(props) {
  const [details, setDetails] = useState("");
  const [number, setNumber] = useState("");
  const [network, setNetwork] = useState("");
  const [trigger, setTrigger] = useState(false);

  useEffect(() => {
    setDetails(JSON.parse(sessionStorage.getItem(props.title)));
    console.log(number);
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
  }, [number]);

  const Buy = (e) => {
    e.preventDefault();
    if (!(number.length === 10)) {
      document.querySelector(".phone").style.borderColor = "red";
    } else if (!network == "") {
      document.querySelector(".phone").style.borderColor = "red";
    }
  };

  return (
    <>
      <Modal.Body className="bg-dark text-center">
        <Row>
          <Col xs="auto">Location: {details.mall}</Col>
          <Col xs="auto">Price: {details.cedis} GHC</Col>
          <Col xs="auto">Pcs: {details.pcs} </Col>
        </Row>
        <Form>
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

          {trigger ? (
            <Button id="btn-blue" size="lg" className={loading ? "disabled" : ""} type="submit" block>
              <Spinner animation="border" variant="secondary" /> Purchasing Please Wait.....
            </Button>
          ) : (
            <Button id="btn-blue" size="lg" type="submit" block>
              Purchase Ticket
            </Button>
          )}
        </Form>
      </Modal.Body>
    </>
  );
}

export default MomoModal;
