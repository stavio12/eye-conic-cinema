import React, { useEffect, useState } from "react";
import { Button, Container, Col, Row, Image } from "react-bootstrap";
import { useParams } from "react-router-dom";

import avi2 from "../../src/avartar/102418.jpg";
import avi3 from "../../src/avartar/122749.png";
import avi4 from "../../src/avartar/152685.jpg";
import avi5 from "../../src/avartar/152687.jpg";
import avi6 from "../../src/avartar/230987.jpg";
import avi7 from "../../src/avartar/92077.jpg";

function Avartar() {
  const [imgUrl, setImgUrl] = useState();
  const { id } = useParams();

  const nameImg = (img) => {
    console.log(document.querySelector("#avartar").getAttribute("src"));
  };
  return (
    <>
      <h2 className="text-center">Select an avartar to suit your profile</h2>
      <Container>
        <Row>
          <Col xs={6} onClick={nameImg} md={4} className="pb-5 pt-5">
            <Image id="avartar" src="https://drive.google.com/file/d/1Cw-iu_4Gh7s_KoumAaICwR-sUKQktrzi/view?usp=sharing" thumbnail />
          </Col>
          <Col xs={6} md={4} onClick={nameImg} className="pb-5 pt-5">
            <Image id="avartar" src="https://drive.google.com/file/d/1EEFRDbJlNYe8KJYbe5S0T2PVEDr4eWyX/view?usp=sharing" thumbnail />
          </Col>
          <Col xs={6} md={4} className="pb-5 pt-5">
            <Image id="avartar" src="https://drive.google.com/file/d/1GK6-DrMLBOTLy7YP58PqCXyT8IlozwVx/view?usp=sharing" thumbnail />
          </Col>
          <Col xs={6} md={4} className="pb-5 pt-5">
            <Image id="avartar" src="https://drive.google.com/file/d/1IyT563zEf2lDEACmtz1TB3WY69t8JnXZ/view?usp=sharing" thumbnail />
          </Col>
          <Col xs={6} md={4} className="pb-5 pt-5">
            <Image id="avartar" src="https://drive.google.com/file/d/1mKMQ7OFv_EwdBU_gA4dt4Pe21_SDr2FN/view?usp=sharing" thumbnail />
          </Col>
          <Col xs={6} md={4} className="pb-5 pt-5">
            <Image id="avartar" src="https://drive.google.com/file/d/1nbKFIAcQpVe0mtF8twaZ9n60-bCV7sCB/view?usp=sharing" thumbnail />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Avartar;
