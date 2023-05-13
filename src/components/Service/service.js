import React, { Component } from "react";
import { Container, Row } from "reactstrap";

//Import Section Title
import SectionTitle from "../common/section-title";
import ServiceBox from "./services-box";

class Process extends Component {
  constructor(props) {
    super(props);
    this.state = {
      services1: [
        {
          icon: "pe-7s-music",
          title: "Expanded Music Catalog",
          desc: "We offer a wider range of music genres, including music from independent artists, and emerging talents.",
        },
        {
          icon: "pe-7s-diamond",
          title: "Data Privacy and Security",
          desc: "We prioritize user privacy by utilizing encryption and decentralized storage, allowing users to have more control over their personal information.",
        },
        {
          icon: "pe-7s-piggy",
          title: "Fairer Compensation for Artists",
          desc: "We aim to provide fairer compensation to artists by eliminating intermediaries, supporting their creative endeavors and ensuring they receive a more equitable share of revenue.",
        },
      ],
      // services2: [
      //   {
      //     icon: "pe-7s-science",
      //     title: "Awesome Support",
      //     desc: "It is a paradisematic country, in which roasted parts of sentences fly into your mouth leave for the far World.",
      //   },
      //   {
      //     icon: "pe-7s-news-paper",
      //     title: "Truly Multipurpose",
      //     desc: "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.",
      //   },
      //   {
      //     icon: "pe-7s-plane",
      //     title: "Easy to customize",
      //     desc: "Question Marks and devious Semikoli, but the Little Blind Text didn’t listen. She packed her seven versalia.",
      //   },
      // ],
    };
  }

  render() {
    return (
      <React.Fragment>
        <section className={"section " + this.props.sectionClass} id="services">
          <Container>
            {/* section title */}
            <SectionTitle
              title="Our Services"
              desc="Say goodbye to unfair compensation and opaque transactions. Chorus leverages blockchain technology to ensure that artists get paid what they deserve and users get a transparent and secure music streaming experience. Join the future of music streaming today."
            />

            <Row className="mt-4">
              {/* services box */}
              <ServiceBox services={this.state.services1} />
            </Row>

            {/* <Row className="mt-4">
              <ServiceBox services={this.state.services2} />
            </Row> */}
          </Container>
        </section>
      </React.Fragment>
    );
  }
}

export default Process;
