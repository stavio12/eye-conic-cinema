import React, { useEffect, useContext, useState } from "react";
import { Table } from "react-bootstrap";
import StateContext from "../StateContext";

function ActiveOrder() {
  const appState = useContext(StateContext);
  const [userOrder, setUserOrder] = useState(appState.user.orders);

  // useEffect(() => {
  //   const fetchOrders = async () => {
  //     appState.user.orders = await appState.user.orders;
  //   };

  //   fetchOrders();
  // }, [userOrder]);
  // console.log(userOrder);
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

export default ActiveOrder;
