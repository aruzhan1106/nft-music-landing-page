import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";

class GetStart extends Component {
  render() {
    return (
      <section className="section section-lg bg-get-start">
        <div className="bg-overlay"></div>
        <Container>
          <Row>
            <Col lg={{ size: 8, offset: 2 }} className="text-center">
              <h1 className="get-started-title text-white">
                Let&apos;s Get Started
              </h1>
              <div className="section-title-border mt-4 bg-white"></div>
              <p className="section-subtitle font-secondary text-white text-center pt-4">
                Finally, a modern streaming service designed with artists in mind. Experience the freedom.{" "}
              </p>
              <a 
                href="https://chorus-app.vercel.app"
                className="btn btn-white waves-effect mt-3 mb-4"
              >
                Start listening <i className="mdi mdi-arrow-right"></i>{" "}
              </a>
            </Col>
          </Row>
        </Container>
        <div className="bg-pattern-effect">
          <img src="assets/images/bg-pattern-light.png" alt="pattern" />
        </div>
      </section>
    );
  }
}

export default GetStart;
