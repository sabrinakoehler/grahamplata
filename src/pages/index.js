import React from "react";
import Link from "gatsby-link";
import { Container, Image, Segment } from "semantic-ui-react";
import backgroundImage from "./images/5.jpg";

const styles = {
  label: {
    marginTop: 5,
    marginLeft: 5,
    letterSpacing: 2,
    fontSize: 10
  }
};

const ImageLabel = () => (
  <div>
    <p style={styles.label}>
      Nikon D500 80.0-400.0 mm ƒ/4.5-5.6<br />ƒ/4.5 80.0mm @ 1/320 ISO 125
    </p>
  </div>
);

const IndexPage = () => (
  <div>
    <Container fluid>
      <Image src={backgroundImage} fluid />
      <ImageLabel />
    </Container>
  </div>
);

export default IndexPage;
