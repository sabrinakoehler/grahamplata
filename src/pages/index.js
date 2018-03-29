import React from "react";
import Link from "gatsby-link";
import Img from "gatsby-image";
import { Container, Image, Segment } from "semantic-ui-react";

const styles = {
  label: {
    marginTop: 5,
    marginLeft: 5,
    letterSpacing: 2,
    fontSize: 10
  }
};

const rand = Math.floor(Math.random() * 12);

const IndexPage = ({ data }) => (
  <div>
    <Container fluid>
      <Img sizes={data.headerImage.sizes} />
      <div>
        <p style={styles.label}>Nikon D500 80.0-400.0 mm ƒ/4.5-5.6</p>
      </div>
    </Container>
  </div>
);

export const pageQuery = graphql`
  query HeaderImageQuery {
    headerImage: imageSharp(id: { regex: "/2/" }) {
      sizes(maxWidth: 5000) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`;

export default IndexPage;
