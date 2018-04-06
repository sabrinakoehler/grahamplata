import React from "react";
import Link from "gatsby-link";
import Img from "gatsby-image";
import { Image, Container, Segment } from "semantic-ui-react";

const styles = {
  label: {
    marginTop: 5,
    marginLeft: 5,
    letterSpacing: 2,
    fontSize: 10
  }
};

const rand = Math.floor(Math.random() * 10 + 1);

const IndexPage = ({ data }) => (
  <Container fluid>
    <Img
      style={{
        width: `100%`,
        objectPosition: `strech`
      }}
      resolutions={data.allFile.edges[rand].node.childImageSharp.resolutions}
    />
    <div>
      <p style={styles.label}>Nikon D500 80.0-400.0 mm ƒ/4.5-5.6</p>
    </div>
  </Container>
);

export const query = graphql`
  query ImagesQuery {
    allFile(filter: { sourceInstanceName: { eq: "headerImages" } }) {
      edges {
        node {
          childImageSharp {
            resolutions(width: 1280) {
              ...GatsbyImageSharpResolutions
            }
          }
        }
      }
    }
  }
`;

export default IndexPage;
