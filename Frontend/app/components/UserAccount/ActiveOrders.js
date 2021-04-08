import React, { useEffect, useContext, useState } from "react";
import { Table } from "react-bootstrap";
import StateContext from "../StateContext";
import { showAlert } from "../Flashmsg";
import axios from "axios";

function ActiveOrder() {
  const appState = useContext(StateContext);
  const [order, setOrder] = useState([]);

  useEffect(() => {
    const GetUser = async () => {
      try {
        //Sending details to backend server......
        const res = await axios({
          method: "get",
          url: `https://eyeconic-cinema.herokuapp.com/${appState.user._id}`,
          // http://localhost:3000/login
          withCredentials: true,
          credentials: "include",
        }).then( (response) => {
          console.log(response)
          //If sending details to server turn on spinners and disable forms to readonly
          if (response.data.status === 200) {
            setOrder(response.data.user.orders);
          }
        });
      } catch (err) {
        console.log(err.response);
        if (err.toString() === "Error: Network Error") {
          //Log network erorr here
          showAlert("danger", err.message);
        } else if (err.response !== undefined) {
          showAlert("danger", err.response.data.message);
        }
      }
    };
    GetUser();
  }, [order]);

  return (
    <>
      <Table striped bordered hover className="text-white">
        <thead>
          <tr>
            <th>Movie</th>
            <th>Amount </th>
            <th>No of Tickets </th>
            <th>Run Time</th>
            <th>Mall</th>
            <th>Payment</th>
            {/* <th>Username</th> */}
          </tr>
        </thead>
        <tbody>
          {order.map((orders, index) => {
            return (
              <tr key={index}>
                <td>{orders.movie}</td>
                <td>{orders.amount}</td>
                <td>{orders.pcs}</td>
                <td>{orders.runtime}</td>
                <td>{orders.mall}</td>
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
