import React, { useEffect } from "react";
import { Button } from "react-bootstrap";

function Promo() {
  return (
    <>
      <div id="promos" className="text-center pb-2 ml-sm-5 pl-sm-5 ml-md-0 pl-md-0 pt-5 mt-5">
        <Button id="btn-blue" size="lg">
          <i className="fa fa-bookmark" aria-hidden="true"></i> SEE ALL OFFERS AND PROMOTIONS
        </Button>
      </div>
    </>
  );
}

export default Promo;
