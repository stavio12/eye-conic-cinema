import React, { useEffect, useContext, useState } from "react";
import { Table, Form, Container, Col, Row, Nav, Navbar } from "react-bootstrap";
import StateContext from "../StateContext";

function WatchList() {
  const appState = useContext(StateContext);
  const [userOrder, setUserOrder] = useState(appState.user.watchList);
  return (
    <>
      <Table striped bordered hover className="text-white">
        <thead>
          <tr>
            <th>#</th>
            <th>Movie</th>
            <th>Run Time</th>
            {/* <th>Username</th> */}
          </tr>
        </thead>
        <tbody>
          {userOrder.map((orders, index) => {
            return (
              <tr key={index}>
                <td>{orders.movie}</td>
                <td>{orders.runtime}</td>
                <td>{orders.payment}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
}

export default WatchList;
