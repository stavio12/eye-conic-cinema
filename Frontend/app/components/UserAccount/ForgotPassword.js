import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { Button, Form, Container, Col, Row, Spinner } from "react-bootstrap";
import DispatchContext from "../DispatchContext";
import StateContext from "../StateContext";

function ForgotPassword() {
  const [email, setEmail] = useState();
  const [loading, setIsLoading] = useState();
  const appDispatch = useContext(DispatchContext);
  const appState = useContext(StateContext);

  const reset = async (e) => {
    e.preventDefault();
    console.log("This method is called");
    setIsLoading(true);

    try {
      //Sending details to backend server......
      const res = await axios({
        method: "post",
        url: "http://localhost:4000/forgotPassword",
        data: {
          email: email,
        },
      }).then((response) => {
        //If sending details to server turn on spinners and disable forms to readonly
        //If the user account is created redirect the user to Login page
        setIsLoading(false);

        if (response.statusText === "success") {
          appDispatch({ type: "ERROR", payload: response.data.data });
        }

        appDispatch({ type: "ERROR", payload: response.data.data });
      });
      console.log("In here");

      //Clear up form after submitting
      document.getElementById("form").reset();
    } catch (err) {
      setIsLoading(false);

      appDispatch({ type: "ERROR", payload: err.toString() });
    }
  };
  return (
    <>
      <section id="login-page">
        <Container>
          <Row>
            <Col xs={12} lg={{ span: 6, offset: 3 }}>
              <Form className="text-center m-5 p-5 mt-5" id="form" onSubmit={reset} method="POST">
                {/* Show error message if there is any */}

                {appState.error ? (
                  <h4 className="bg-danger text-white">
                    ! <br />
                    {appState.error}
                  </h4>
                ) : null}

                <Form.Group controlId="formBasicEmail">
                  <Form.Label className="h5">Email address</Form.Label>
                  <Form.Control
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    type="email"
                    name="email"
                    className={loading ? "bg-dark border border-dark text-white text-center disabled" : "bg-dark border border-dark text-white text-center "}
                    placeholder="Enter email"
                    required
                  />
                  <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
                </Form.Group>

                {/* //If sending details to server turn on spinners and disable forms to readonly */}
                {loading ? (
                  <Button id="btn-blue" size="lg" className={loading ? "disabled" : ""} type="submit" block>
                    <Spinner animation="border" variant="secondary" /> Please wait....
                  </Button>
                ) : (
                  <Button id="btn-blue" size="lg" type="submit" block>
                    Send
                  </Button>
                )}
              </Form>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default ForgotPassword;
