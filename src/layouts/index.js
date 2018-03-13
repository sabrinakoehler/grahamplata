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
        { name: "description", content: "Sample" },
        { name: "keywords", content: "sample, something" }
      ]}
    />
    <Container>
      <div
        style={{ display: "flex", minHeight: "90vh", flexDirection: "column" }}
      >
        <div style={{ flex: 1, marginTop: "1.25em" }}>
          <MainMenu />
          {children()}
        </div>
      </div>
      <Footer />
    </Container>Ï
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
