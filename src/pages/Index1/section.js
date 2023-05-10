import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";

class Section extends Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,
    };
    this.callModal.bind(this);
    this.closeModal.bind(this);
  }

  callModal = () => {
    this.setState({ isOpen: true });
  };

  closeModal = () => {
    this.setState({ isOpen: false });
  };

  render() {
    return (
      <React.Fragment>
        <section
          className="section bg-home home-half"
          data-image-src="images/bg-home.jpg"
          id="home"
        >
          <div className="bg-overlay"></div>
          <div className="display-table">
            <div className="display-table-cell">
              <Container>
                <Row className="justify-content-center">
                  <Col lg={8} className="text-white text-center">
                    <h1 className="home-title">
                      Experience music like never before with Chorus
                    </h1>
                    <p className="pt-3 home-desc">
                      The platform that puts the power back in your hands.
                      Create custom playlists, discover exclusive content, and
                      enjoy a seamless, ad-free streaming experience that's
                      tailored to you.
                    </p>
                  </Col>
                </Row>
              </Container>
            </div>
          </div>
          <div className="bg-pattern-effect">
            <img src="assets/images/bg-pattern.png" alt="dorsin" />
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default Section;
