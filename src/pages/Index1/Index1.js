import React, { Component } from "react";

import NavbarPage from "../../components/Navbar/Navbar_Page";
import Section from "./section";
import Service from "../../components/Service/service";
import AboutUs from "../../components/AboutUs/AboutUs";
import WebsiteDesc from "../../components/WebsiteDesc/WebsiteDesc";
// import Pricing from "../../components/Pricing/pricing";
import Team from "../../components/Team/Team";
import Process from "../../components/Process/Process";
import Testimonials from "../../components/Testimonials/Testimonials";
import GetStart from "../../components/GetStart/GetStart";

import Social from "../../components/Social/Social";
import Footer from "../../components/Footer/footer";

class Index1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navItems: [
        { id: 1, idnm: "services", navheading: "Services" },
        { id: 2, idnm: "features", navheading: "Features" },
        { id: 3, idnm: "team", navheading: "Team" },
      ],
      navClass: "",
    };
  }

  render() {
    return (
      <React.Fragment>
        {/* Importing Navbar */}
        <NavbarPage
          navItems={this.state.navItems}
          navClass={this.state.navClass}
        />

        {/* section */}
        <Section />

        {/* services */}
        <Service sectionClass="pt-5" />

        {/* about us */}
        <AboutUs />

        {/* website description */}
        <WebsiteDesc />

        {/* pricing */}
        {/* <Pricing /> */}

        {/* team */}
        <Team />

        {/* process */}
        <Process />

        {/* testimonial */}
        <Testimonials />

        {/* get started */}
        <GetStart />

        {/* social */}
        <Social />

        {/* footer */}
        <Footer />
      </React.Fragment>
    );
  }
}

export default Index1;
