import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button, Form, Container, Col, Row, Spinner } from "react-bootstrap";
import { Link, Redirect } from "react-router-dom";
import { showAlert } from "../Flashmsg";

function Signup() {
  const [username, setUserName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState("");
  const [loading, setIsLoading] = useState(false);

  useEffect(() => {}, [setError, setIsLoading]);

  const register = async (e) => {
    e.preventDefault();

    console.log("This method is called");
    setIsLoading(true);

    try {
      //Sending details to backend server......
      const res = await axios({
        method: "post",
        url: "https://eyeconic-cinema.herokuapp.com/signup",
        data: {
          username: username,
          email: email,
          password: password,
        },
      }).then((response) => {
        //If sending details to server turn on spinners and disable forms to readonly
        //If the user account is created redirect the user to Login page
        if (response.statusText === "Created") {
          setIsLoading(false);
          return <Redirect to="/login" />;
        } else {
          //If there is any registration error redirect the user to signup page
          setError(response.data);
          setIsLoading(false);
        }
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
              <Form className="text-center m-5 p-5 mt-5" id="form" onSubmit={register} method="POST">
                {/* Show error message if there is any */}

                {error ? (
                  <h4 className="bg-danger text-white">
                    ! <br />
                    {error}
                  </h4>
                ) : null}
                <Form.Group controlId="formBasicEmail" className="pt-5">
                  <Form.Label className="h5">Username</Form.Label>
                  <Form.Control
                    onChange={(e) => {
                      setUserName(e.target.value);
                    }}
                    type="text"
                    name="username"
                    className={loading ? "bg-dark border border-dark text-white text-center disabled" : "bg-dark border border-dark text-white text-center "}
                    placeholder="Enter username"
                    required
                  />
                </Form.Group>

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
                    <Spinner animation="border" variant="secondary" /> Signining Up
                  </Button>
                ) : (
                  <Button id="btn-blue" size="lg" type="submit" block>
                    Signup
                  </Button>
                )}
                <p>or</p>
                <Button variant="success" size="lg" type="submit">
                  <Link className="text-white pb-5" to="/login">
                    Login
                  </Link>
                </Button>
                <br />
                <Link className="text-white pt-3" to="/reset">
                  Have You forgotten your account details?
                </Link>
              </Form>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Signup;
