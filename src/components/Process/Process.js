import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
//Import Section Title
import SectionTitle from "../common/section-title";
import ProcessBox from "./ProcessBox";

class Process extends Component {
  constructor(props) {
    super(props);
    this.state = {
      processes: [
        {
          icon: "pe-7s-music",
          title: "Discover music",
          desc: "",
        },
        {
          icon: "pe-7s-like",
          title: "Buy music NFTs and resell for a higher price",
          desc: "",
        },
        {
          icon: "pe-7s-star",
          title: "Earn ownership and ETH",
          desc: "",
        },
      ],
    };
  }

  render() {
    return (
      <React.Fragment>
        <section className="section bg-light">
          <Container>
            {/* section title */}
            <SectionTitle
              title="HOW IT WORKS"
              // desc=""
            />

            <Row>
              <Col lg={6} className="text-center process-left-icon-1">
                <i className="pe-7s-angle-right"></i>
              </Col>
              <Col lg={6} className="text-center process-left-icon-2">
                <i className="pe-7s-angle-right"></i>
              </Col>
            </Row>
            <Row className="mt-5">
              <ProcessBox processes={this.state.processes} />
              {/* <div className="text-center mx-auto">
                <a
                  href="#"
                  className="btn btn-primary waves-light waves-effect mt-5"
                >
                  Get Started <i className="mdi mdi-arrow-right"></i>
                </a>
              </div> */}
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}

export default Process;
