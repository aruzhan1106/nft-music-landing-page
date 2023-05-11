import React, { Component } from "react";
import { Container, Row, Col, Button } from "reactstrap";
import { Link } from "react-router-dom";

class Social extends Component {
  render() {
    return (
      <React.Fragment>
        <section className="contact-social bg-light">
          <Container>
            <Row className="align-items-center">
              <Col lg={6}>
                <ul className="list-inline social mt-4">
                  <li className="list-inline-item">
                    <Link to="#" className="social-icon">
                      <i className="mdi mdi-instagram"></i>
                    </Link>
                  </li>
                  <li className="list-inline-item">
                    <Link to="#" className="social-icon">
                      <i className="mdi mdi-twitter"></i>
                    </Link>
                  </li>
                  <li className="list-inline-item">
                    <Link to="#" className="social-icon">
                      <i className="mdi mdi-discord"></i>
                    </Link>
                  </li>
                </ul>
              </Col>
              <Col lg={3} className="mt-4">
                <p className="contact-title">
                  <i className="pe-7s-mail-open"></i>&nbsp; support@chorus.com
                </p>
              </Col>
              <Col lg={3} className="text-end">
                <a href="https://chorus-app.vercel.app" target="_blank" rel="noopener noreferrer">
                  <Button
                    color="none"
                    type="button"
                    className="btn btn-primary navbar-btn btn-rounded waves-effect waves-light">
                    Start Listening
                  </Button>
                </a>
              </Col>
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}

export default Social;
