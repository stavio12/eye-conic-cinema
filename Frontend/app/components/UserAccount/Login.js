import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { Button, Form, Container, Col, Row, Spinner } from "react-bootstrap";
import { Link, Redirect, useParams } from "react-router-dom";
import Avartar from "./Avartar";

import DispatchContext from "../DispatchContext";
import StateContext from "../StateContext";

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
        withCredentials: true,
        credentials: "include",
        data: {
          email: email,
          password: password,
        },
      }).then(async (response) => {
        //If sending details to server turn on spinners and disable forms to readonly

        setIsLoading(false);

        //Validate user details

        if (response.data.status != 200) {
          //Logout Error Message
          appDispatch({ type: "ERROR", payload: response.data.data });
          // //Clear up form after submitting
          document.getElementById("form").reset();
        }
        //Login user and send data into state
        const userData = await response.data;
        //Store user data into state
        appDispatch({ type: "LOGIN", payload: { _id: userData.user._id, username: userData.user.username, token: userData.token, orders: userData.user.orders, watchList: userData.user.watchList }, LoggedIn: true });
      });
    } catch (err) {
      setIsLoading(false);
      if (err.toString() === "Error: Network Error") {
        //Log network erorr here

        appDispatch({ type: "ERROR", payload: err.toString() });
      }

      //Log out any other erorr here

      // appDispatch({ type: "ERROR", payload: err.toString() });
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
                  {/* Show error message if there is any */}
                  {/* 
                  // {appState.error ? (
                  //   <h4 className="bg-danger text-white">
                  //     ! <br />
                  //     {appState.error}
                  //   </h4>
                  // ) : null} */}

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
