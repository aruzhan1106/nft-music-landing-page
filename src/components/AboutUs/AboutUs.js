import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

class AboutUs extends Component {
  render() {
    return (
      <React.Fragment>
        <section className="section bg-light" id="features">
          <Container>
            <Row className="vertical-content">
              <Col lg={5}>
                <div className="features-box">
                  <h3>About us</h3>
                  <p className="text-muted web-desc">
                    We are a team of music industry veterans and blockchain
                    enthusiasts who are passionate about creating a platform
                    that benefits everyone. Our vision is to empower artists and
                    music lovers alike, and to revolutionize the way music is
                    streamed and enjoyed
                  </p>
                  <ul className="text-muted list-unstyled mt-4 features-item-list">
                    <li className="">We put a lot of effort in design.</li>
                    <li className="">
                      The most important ingredient of successful website.
                    </li>
                    <li className="">
                      Sed ut perspiciatis unde omnis iste natus error sit.
                    </li>
                    <li className="">Submit Your Organization.</li>
                  </ul>
                  <Link
                    to="#"
                    className="btn btn-primary mt-4 waves-effect waves-light"
                  >
                    Learn More <i className="mdi mdi-arrow-right"></i>
                  </Link>
                </div>
              </Col>
              <Col lg={7}>
                <div className="features-img features-right text-end">
                  <img
                    src="assets/images/online-world.svg"
                    alt="macbook"
                    className="img-fluid"
                  />
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}

export default AboutUs;
