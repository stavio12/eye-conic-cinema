import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Button, Form, Container, Col, Row, Spinner } from "react-bootstrap";
import DispatchContext from "../DispatchContext";
import StateContext from "../StateContext";
import { showAlert } from "../Flashmsg";

function ResetPassword() {
  const { token } = useParams();
  const [password, setPassword] = useState();
  const [loading, setIsLoading] = useState();
  const [Token, setToken] = useState();
  const appDispatch = useContext(DispatchContext);
  const appState = useContext(StateContext);

  useEffect(() => {
    setToken(token);
  }, []);

  const reset = async (e) => {
    e.preventDefault();

    console.log("This method is called");
    setIsLoading(true);

    try {
      //Sending details to backend server......
      const res = await axios({
        method: "patch",
        url: `https://eyeconic-cinema.herokuapp.com/resetPassword/${token}`,
        data: {
          password: password,
        },
      }).then((response) => {
        //If sending details to server turn on spinners and disable forms to readonly
        //If the user account is created redirect the user to Login page
        setIsLoading(false);
        console.log(response);
        if (response.data.status === "success") {
          return (window.location = "/login");
        }

        appDispatch({ type: "ERROR", payload: response.data.data });
      });
      console.log("In here");

      //Clear up form after submitting
      document.getElementById("form").reset();
    } catch (err) {
      setIsLoading(false);
      if (err.toString() === "Error: Network Error") {
        //Log network erorr here

        showAlert("danger", err.toString());
      }

      //Log out any other erorr here

      showAlert("danger", err.toString());
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

                <Form.Group controlId="formBasicPassword">
                  <Form.Label className="h5">Password</Form.Label>
                  <Form.Control
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                    type="password"
                    name="password"
                    className={loading ? "bg-dark border border-dark text-white text-center disabled" : "bg-dark border border-dark text-white text-center "}
                    placeholder="New Password"
                    required
                  />
                </Form.Group>

                {/* //If sending details to server turn on spinners and disable forms to readonly */}
                {loading ? (
                  <Button id="btn-blue" size="lg" className={loading ? "disabled" : ""} type="submit" block>
                    <Spinner animation="border" variant="secondary" /> Please wait....
                  </Button>
                ) : (
                  <Button id="btn-blue" size="lg" type="submit" block>
                    Reset
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

export default ResetPassword;
