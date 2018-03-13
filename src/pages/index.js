import React from "react";
import Link from "gatsby-link";
import { Container, Image, Segment } from "semantic-ui-react";
import backgroundImage from "./images/5.jpg";

const IndexPage = () => (
  <div>
    <Container fluid>
      <Image src={backgroundImage} fluid />
      <Segment basic size="small">
        Pellentesque habitant morbi tristique senectus.
      </Segment>
    </Container>
  </div>
);

export default IndexPage;
