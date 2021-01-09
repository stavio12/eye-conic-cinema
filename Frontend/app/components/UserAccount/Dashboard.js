import React, { useEffect, useContext, useState } from "react";
import { Button, Form, Container, Col, Row, Nav, Navbar } from "react-bootstrap";
import DispatchContext from "../DispatchContext";
import StateContext from "../StateContext";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

import { Link } from "react-router-dom";
import DashboardNav from "./DashboardNav";
import DashboardHome from "./DashboardHome";
import AllOrders from "./AllOrders";
import WatchList from "./WatchList";
import ActiveOrders from "./ActiveOrders";

function Dashboard() {
  const appDispatch = useContext(DispatchContext); // For accessing  Login function
  const appState = useContext(StateContext); // For accessing  Login function
  return (
    <Router>
      <Switch>
        <Row>
          <Col xs={12} md={2}>
            <DashboardNav />
          </Col>
          <Col xs={12} md={10}>
            <h2>Hello, {appState.user.username}</h2>
            <div id="dashboard">
              <Container>
                <Route path={`/:${appState.user._id}/dashboard/`} exact>
                  <DashboardHome />
                </Route>
                <Route path="/active-orders/" exact>
                  <ActiveOrders />
                </Route>
                <Route path="/all-orders/" exact>
                  <AllOrders />
                </Route>
                <Route path="/watch-list/" exact>
                  <WatchList />
                </Route>
              </Container>
            </div>
          </Col>
        </Row>
      </Switch>
    </Router>
  );
}

export default Dashboard;
