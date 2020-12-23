import React, { useEffect } from "react";
import { Button, Container, Col, Row, Form, FormControl } from "react-bootstrap";

function Contact() {
  return (
    <>
      <section id="contact">
        <Container>
          <Row>
            <Col>
              <div id="pop"></div>
            </Col>

            <Col>
              <div className="contact">
                <h4 className="text-danger">CONTACT</h4>
                <h1>
                  CONTACT <span>US</span>
                </h1>
              </div>
              <div>
                <h4>PHONE</h4>
                <p>(255) 3657-6584</p>
              </div>

              <div>
                <h4>ADDRESS</h4>
                <p>5678 Extra Rd. #123 San Francisco, CA 96120.</p>
              </div>

              <div>
                <h4>EMAIL</h4>
                <p>hello@divitheater.com</p>
              </div>

              <div>
                <Form>
                  <Row>
                    <Col>
                      <Form.Control placeholder="First name" />
                    </Col>
                    <Col>
                      <Form.Control placeholder="Last name" />
                    </Col>
                    <Col>
                      <Form.Label>Message</Form.Label>
                      <Form.Control as="textarea" rows={5} col={5} />
                    </Col>
                  </Row>
                </Form>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section id="refund">
        <h4 className="text-danger">REFUNDS</h4> <br />
        <h1>
          Get a <span>Refund</span>{" "}
        </h1>{" "}
        <br />
        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p> <br />
        <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.</p> <br />
        <Button size="lg">REQUST</Button>
      </section>

      <section id="faq">
        <h4 className="text-danger">FAQ</h4>
        <h1>
          Search for <span>Answers</span>{" "}
        </h1>

        <div>
          <Form>
            <Col>
              <Form.Control type="text" placeholder="Search" />
            </Col>
          </Form>

          <ul>
            <li>Lorem ipsum dolor sit amet?</li>
            <li>Lorem ipsum dolor sit amet?</li>
            <li>Lorem ipsum dolor sit amet?</li>
            <li>Lorem ipsum dolor sit amet?</li>
            <li>Lorem ipsum dolor sit amet?</li>
          </ul>
        </div>
      </section>

      <section id="map"></section>
    </>
  );
}

export default Contact;
