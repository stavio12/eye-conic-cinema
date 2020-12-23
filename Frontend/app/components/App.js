import React, { useEffect, useReducer, useState, useContext } from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
// import { useImmerReducer } from "use-immer";
import DocumentTitle from "react-document-title";
import StateContext from "./StateContext";
import DispatchContext from "./DispatchContext";

import Header from "./Header";
import Promo from "./Promo";
import Footer from "./Footer";
import Homepage from "./home/Homepage";
import Movies from "./movies/Movies";
import Calender from "./Calendar/Calender";
import Membership from "./membership/Membership";
import About from "./about/About";
import Login from "./UserAccount/Login";
import Signup from "./UserAccount/Signup";
import Avartar from "./UserAccount/Avartar";
import UserHeader from "./UserAccount/UserHeader";
import Dashboard from "./UserAccount/Dashboard";

//States
// const [error, setError] = useState("");
// const [loading, setIsLoading] = useState(false);
// const [user, setUser] = useState();

const App = () => {
  const initialState = {
    loading: Boolean(),
    LoggedIn: false,
    error: "",
    user: {
      _id: null,
      username: null,
      avatar: null,
    },
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "LOGIN":
        return {
          LoggedIn: true,
          loading: Boolean(),
          user: action.payload,
        };
      case "ERROR":
        return {
          loading: Boolean(),
          error: action.payload,
        };
      case "LOGOUT":
        return {
          LoggedIn: false,
          user: null,
        };
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const authUser = (Component) => {
    return state.LoggedIn ? <Component /> : <Redirect to="/login" />;
  };

  useEffect(() => {
    document.title = "Eyeconic || EXPERINCE MOVIES";
  }, [DocumentTitle]);

  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        <Router>
          {state.LoggedIn ? <UserHeader /> : <Header />}
          {/* <UserHeader /> */}
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

            <Route path="/calender" exact>
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

            <Route path="/signup" exact>
              <DocumentTitle title="Eyeconic || Signup">
                <Signup />
              </DocumentTitle>
            </Route>

            <Route path="/login" exact>
              <DocumentTitle title="Eyeconic || login">
                <Login />
              </DocumentTitle>
            </Route>

            <Route path="/:id/dashboard/" exact>
              <DocumentTitle title="Eyeconic || Welcome">{authUser(Dashboard)}</DocumentTitle>
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
