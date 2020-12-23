import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import DispatchContext from "../DispatchContext";
import StateContext from "../StateContext";

function DashboardNav() {
  const appDispatch = useContext(DispatchContext); // For accessing  Login function
  const appState = useContext(StateContext); // For accessing  Login function

  const LogoutUser = () => {
    appDispatch({ type: "LOGOUT" });
  };

  return (
    <>
      <div id="dashboardNav">
        <ul className="mx-auto">
          <Link to={`/:${appState.user._id}/dashboard/`} className="pt-5">
            <li>Home</li>
          </Link>
          <Link to="/active-orders">
            <li>Active Orders</li>
          </Link>
          <Link to="/all-orders">
            <li>All Orders</li>
          </Link>
          <Link to="/watch-list">
            <li>Watch List</li>
          </Link>
          <Link to="/edit-profile">
            <li>Edit Profile</li>
          </Link>
          <Link to="/logout">
            <li className="text-danger" onClick={LogoutUser}>
              Log Out
            </li>
          </Link>
        </ul>
      </div>
    </>
  );
}

export default DashboardNav;
