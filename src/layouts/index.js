import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { Container } from "semantic-ui-react";

import MainMenu from "../components/MainMenu";
import Footer from "../components/Footer";

import "semantic-ui-css/semantic.min.css";

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Graham Plata's Digital Sandbox"
      meta={[
        { name: "description", content: "Graham Plata's personal website." },
        { name: "keywords", content: "Graham, Plata, Graham Plata" }
      ]}
    />
    <Container>
      <div
        style={{ display: "flex", minHeight: "95vh", flexDirection: "column" }}
      >
        <div style={{ flex: 1, marginTop: "1.25em" }}>
          <MainMenu />
          {children()}
        </div>
      </div>
      <Footer />
    </Container>
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
