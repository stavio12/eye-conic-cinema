import React, { useEffect } from "react";

function Flashmsg(messages) {
  console.log(messages.messages);
  return (
    <div className="floating-alerts">
      <div className="alert alert-success text-center  shadow-sm ">{messages.messages}</div>
    </div>
  );
}

export default Flashmsg;
