import React, { useEffect } from "react";
import { Col, Row } from "react-bootstrap";

function DashboardHome() {
  return (
    <>
      <Row className="text-center pt-5 pb-5">
        <Col>
          <div className="bg-primary rounded" id="active-orders">
            <h2> Active Orders</h2> <br />
            <h4>5</h4>
          </div>
        </Col>
        <Col>
          <div className="bg-info rounded" id="watch-list">
            <h2> Watch List</h2> <br />
            <h4>5</h4>
          </div>
        </Col>
      </Row>
      <Row className="text-center pt-5 pb-5">
        <Col>
          <div className="bg-success rounded" id="watch-list">
            <h2> All Orders</h2> <br />
            <h4>5</h4>
          </div>
        </Col>
        <Col>
          <div className="bg-warning rounded" id="watch-list">
            <h2> Payment Method</h2> <br />
            <h4>5</h4>
          </div>
        </Col>
      </Row>

      <Row className="text-center pt-5 pb-5">
        <Col>
          <div className="bg-secondary rounded" id="watch-list">
            <h2>Edit Profile</h2> <br />
            <h4>5</h4>
          </div>
        </Col>
        <Col>
          <div className="bg-danger rounded" id="watch-list">
            <h2> Delete Account</h2> <br />
            <h4>5</h4>
          </div>
        </Col>
      </Row>
    </>
  );
}

export default DashboardHome;
