import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { Button, Form, Container, Col, Row, Spinner } from "react-bootstrap";
import { Link, Redirect } from "react-router-dom";
import Avartar from "./Avartar";

import DispatchContext from "../DispatchContext";
import StateContext from "../StateContext";
import { showAlert } from "../Flashmsg";

function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [loading, setIsLoading] = useState();
  // const {id} = useParams();

  const appDispatch = useContext(DispatchContext);
  const appState = useContext(StateContext);
  useEffect(() => {}, [loading]);

  const login = async (e) => {
    e.preventDefault();

    setIsLoading(true);

    try {
      //Sending details to backend server......
      const res = await axios({
        method: "post",
        url: "http://localhost:4000/login",
        // http://localhost:3000/login
        withCredentials: true,
        credentials: "include",
        data: {
          email: email,
          password: password,
        },
      }).then(async (response) => {
        //If sending details to server turn on spinners and disable forms to readonly
        setIsLoading(false);
        console.log(response.data);
        if (response.status === 200) {
          appDispatch({ type: "LOGIN", payload: response.data.user, LoggedIn: true });
          setUser(response.data.user);
        }
      });
    } catch (err) {
      setIsLoading(false);
      if (err.toString() === "Error: Network Error") {
        //Log network erorr here
        showAlert("danger", err.toString());
      } else if (err.response !== undefined) {
        showAlert("danger", err.response.data.message);
      }
    }
  };

  return (
    <>
      {appState.LoggedIn ? (
        <Redirect to={`/${appState.user._id}/dashboard/`} />
      ) : (
        <section id="login-page">
          <Container>
            <Row>
              <Col xs={12} lg={{ span: 6, offset: 3 }}>
                <Form className="text-center m-5 p-5 mt-5" id="form" onSubmit={login} method="POST">
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

                  <Form.Group controlId="formBasicPassword">
                    <Form.Label className="h5">Password</Form.Label>
                    <Form.Control
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }}
                      type="password"
                      name="password"
                      className={loading ? "bg-dark border border-dark text-white text-center disabled" : "bg-dark border border-dark text-white text-center "}
                      placeholder="Password"
                      required
                    />
                  </Form.Group>

                  {/* //If sending details to server turn on spinners and disable forms to readonly */}
                  {loading ? (
                    <Button id="btn-blue" size="lg" className={loading ? "disabled" : ""} type="submit" block>
                      <Spinner animation="border" variant="secondary" /> Signing In
                    </Button>
                  ) : (
                    <Button id="btn-blue" size="lg" type="submit" block>
                      Login
                    </Button>
                  )}
                  <p>or</p>
                  <Button variant="success" size="lg" type="submit">
                    <Link className="text-white pb-5" to="/membership">
                      Signup
                    </Link>
                  </Button>
                  <br />
                  <Link className="text-white pt-3" to="/forgotPassword">
                    Have You forgotten your account details?
                  </Link>
                </Form>
              </Col>
            </Row>
          </Container>
        </section>
      )}
    </>
  );
}

export default Login;
