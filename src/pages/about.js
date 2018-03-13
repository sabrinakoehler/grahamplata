import React from "react";
import Link from "gatsby-link";
import { Header, Grid, Image, Segment } from "semantic-ui-react";
import profile from "./images/profile.png";

const styles = {
  syapse: {
    color: "#21C2D2",
    fontWeight: 700,
    textTransform: "uppercase"
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
          I am a serial skill colloector based in Central Pennsylvania.
          Currently I work at Syapse. In a past life I graduated from Temple
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
          </Link>{" "}
          ~ provides a precision medicine data platform enabling healthcare
          providers to use molecular profiling to diagnose and treat patients.
        </p>
        <h3>What do you like to do?</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla gravida
          massa vitae metus dapibus tincidunt. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Nunc ultricies nulla quis massa cursus,
          quis vulputate felis luctus. Fusce luctus ut leo eget bibendum.
          Phasellus vehicula vulputate mattis. L
        </p>
        <h3>What would you like to learn?</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris lacus
          sapien, aliquam a laoreet vitae, molestie non justo. Nulla et luctus
          nibh. Vestibulum suscipit magna nibh, ut tristique turpis tempor et.
          Vestibulum posuere tincidunt magna, in convallis diam finibus a.
          Quisque iaculis lectus purus, non semper felis efficitur ut. Curabitur
          congue ac velit id efficitur
        </p>
        <h3>Where would you like to travel?</h3>
        <p>
          Praesent a enim consequat, facilisis dolor at, lacinia est. Cras
          porttitor, turpis ut tincidunt mollis, nisl nunc dapibus diam, et
          tempus arcu turpis sed est. Duis posuere faucibus velit id tincidunt.
          Curabitur maximus, diam quis condimentum sagittis, lectus enim auctor
          lacus, eget auctor quam arcu et massa. Curabitur at quam nec nisl
          feugiat venenatis in et magna. Maecenas sollicitudin purus nisi, id
          volutpat lorem cursus in. Sed lobortis ipsum eu neque lacinia
          tincidunt.
        </p>
      </Grid.Column>
    </Grid>
  </div>
);

export default About;
