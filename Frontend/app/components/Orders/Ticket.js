import React, { useEffect, useContext } from "react";
import StateContext from "../StateContext";

function Tickets() {
  const appState = useContext(StateContext);
  console.log(appState.movieTitle);
  return (
    <>
      <h1 className="text-danger">hello {appState.movieTitle}</h1>
      <h1 className="text-danger">hello</h1>
    </>
  );
}

export default Tickets;
