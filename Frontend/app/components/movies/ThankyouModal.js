import React, { useEffect } from "react";

function ThankyouModal(props) {
  return (
    <>
      <div>
        <h3>
          Thank You {props && props.name}
          for Purchasing {props.title}
        </h3>
        <h4>Check Your phone sms inbox for confirmation</h4>
      </div>
    </>
  );
}

export default ThankyouModal;
