import React, { useEffect, useReducer, useState, useContext } from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import DocumentTitle from "react-document-title";
import StateContext from "./StateContext";
import DispatchContext from "./DispatchContext";

import Header from "./Header";
import Promo from "./Promo";
import Footer from "./Footer";
import Homepage from "./home/Homepage";
import Movies from "./movies/Movies";
import MoviePage from "./movies/MoviePage";
import Calender from "./Calendar/Calender";
import Membership from "./membership/Membership";
import MembershipSignup from "./membership/MembershipSignup";
import About from "./about/About";
import Login from "./UserAccount/Login";
import UserHeader from "./UserAccount/UserHeader";
import Dashboard from "./UserAccount/Dashboard";
import ForgotPassword from "./UserAccount/ForgotPassword";
import ResetPassword from "./UserAccount/ResetPassword";

const App = () => {
  const initialState = {
    LoggedIn: false,
    user: {},
    Ticket: null,
    Navigate: false,
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "LOGIN":
        return {
          LoggedIn: true,
          user: action.payload,
        };

      case "LOGOUT":
        return {
          LoggedIn: false,
          user: null,
        };

      case "TICKET":
        return {
          Ticket: action.payload,
        };

      case "Navigate":
        return {
          Navigate: action.payload,
        };
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    document.title = "Eyeconic || EXPERINCE MOVIES";
  }, [DocumentTitle, state.LoggedIn, state.user]);

  const bodyGuard = (Component) => {
    return state.LoggedIn ? <Component /> : <Redirect to="/login" />;
  };

  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        <Router>
          {state.LoggedIn ? <UserHeader /> : <Header />}

          <Switch>
            <Route path="/" exact>
              <DocumentTitle title="Eyeconic || EXPERINCE MOVIES">
                <Homepage />
              </DocumentTitle>
            </Route>

            <Route path="/movies" exact>
              <DocumentTitle title="Eyeconic || Movies">
                <Movies />
              </DocumentTitle>
            </Route>

            <Route path="/movies/:id" exact>
              <DocumentTitle title="Eyeconic || Movies">
                <MoviePage />
              </DocumentTitle>
            </Route>

            <Route path="/calender/" exact>
              <DocumentTitle title="Eyeconic || Calender">
                <Calender />
              </DocumentTitle>
            </Route>

            <Route path="/membership" exact>
              <DocumentTitle title="Eyeconic || Membership">
                <Membership />
              </DocumentTitle>
            </Route>

            <Route path="/about" exact>
              <DocumentTitle title="Eyeconic || About">
                <About />
              </DocumentTitle>
            </Route>

            <Route path="/login" exact>
              <DocumentTitle title="Eyeconic || login">
                <Login />
              </DocumentTitle>
            </Route>

            <Route path="/:id/dashboard/" exact>
              <DocumentTitle title="Eyeconic || Welcome">{bodyGuard(Dashboard)}</DocumentTitle>
            </Route>

            <Route path="/membership/:id/signup" exact>
              <DocumentTitle title={`Eyeconic || Membership`}>
                <MembershipSignup />
              </DocumentTitle>
            </Route>

            <Route path="/forgotPassword" exact>
              <DocumentTitle title={`Eyeconic || Forgot Password`}>
                <ForgotPassword />
              </DocumentTitle>
            </Route>

            <Route path="/resetPassword/:token" exact>
              <DocumentTitle title={`Eyeconic || Reset Password`}>
                <ResetPassword />
              </DocumentTitle>
            </Route>
          </Switch>
          {/* <Calender /> */}
          {/* <Dashboard /> */}
          <Promo />
          <Footer />
        </Router>
      </DispatchContext.Provider>
    </StateContext.Provider>
  );
};

export default App;
