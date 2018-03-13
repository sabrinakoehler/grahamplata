import React from "react";
import Link from "gatsby-link";
import { Header, Grid, Image, Segment } from "semantic-ui-react";
import profile from "./images/profile.png";

const styles = {
  syapse: {
    color: "#21C2D2",
    fontWeight: 700
  }
};

const About = () => (
  <div>
    <Header as="h1">About</Header>
    <Grid stackable columns={2}>
      <Grid.Column>
        <h2>Hi, I'm Graham!</h2>
        <Image src={profile} fluid />
        <h3>What are you known for?</h3>
        <p>
          I am a serial skill colloector based in Central Pennsylvania. Most
          recently with Syapse. In a past life I graduated from Temple
          University with a focus in new media which allotted me the privilege
          to join up with the talented filmmakers at Gabello Studios and
          Shufflebox Productions.
        </p>
      </Grid.Column>
      <Grid.Column>
        <h3>What are you known for?</h3>
        <p>
          I am commonly known for my technological prowess and keen eye for
          design.
        </p>
        <h3>Where are you currently?</h3>
        <p>
          Right now I work as a Support Engineer for{" "}
          <Link style={styles.syapse} to="https://www.syapse.com/">
            Syapse
          </Link>. ~ Syapse provides a precision medicine data platform enabling
          healthcare providers to use molecular profiling to diagnose and treat
          patients.
        </p>
      </Grid.Column>
    </Grid>
  </div>
);

export default About;
