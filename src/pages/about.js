import React from "react";
import Link from "gatsby-link";
import Img from "gatsby-image";
import { Header, Grid, Image, Segment, List } from "semantic-ui-react";

const styles = {
  syapse: {
    color: "#21C2D2",
    fontWeight: 700,
    textTransform: "uppercase"
  }
};

const About = ({ data }) => (
  <div>
    <Grid stackable columns={2}>
      <Grid.Column>
        <h2>Hi, I'm Graham!</h2>
        <Img sizes={data.profileImage.sizes} />
        <h3>What are you known for?</h3>
        <p>
          I am a serial skill collector based in Philadelphia Pennsylvania.
          Currently, I work at Syapse, a precision medicine data platform
          enabling healthcare providers to use molecular profiling to diagnose
          and treat patients. In a past life, I worked alongside the talented
          filmmakers at Gabello Studios and Shufflebox Productions.
        </p>
      </Grid.Column>
      <Grid.Column>
        <h2>Learn more about me</h2>
        <h3>What are you commonly known for?</h3>
        <p>
          I am commonly known for my technological prowess and keen eye for
          design.
        </p>
        <h3>Where are you currently?</h3>
        <p>
          Right now I work as a Support Engineer for{" "}
          <Link style={styles.syapse} to="https://www.syapse.com/">
            Syapse
          </Link>
          ~ provides a precision medicine data platform enabling healthcare
          providers to use molecular profiling to diagnose and treat patients.
        </p>
        <h3>What skills would you like to learn in 2018?</h3>
        <List>
          <List.Item>
            <List.Icon name="circle notched" />
            <List.Content>
              <List.Header>
                <Link to="https://redux.js.org/">Redux</Link>
              </List.Header>
              <List.Description>
                Redux will allow predictable state in my web apps.
              </List.Description>
            </List.Content>
          </List.Item>
          <List.Item>
            <List.Icon name="circle notched" />
            <List.Content>
              <List.Header>
                <Link to="https://www.python.org/">Python</Link>
              </List.Header>
              <List.Description>
                I guess to... "Automate the boring stuff..."
              </List.Description>
            </List.Content>
          </List.Item>
          <List.Item>
            <List.Icon name="circle notched" />
            <List.Content>
              <List.Header>Welding</List.Header>
              <List.Description>
                I want to restore and work on cars eventually. I feel this is a
                nessesary skill for that.
              </List.Description>
            </List.Content>
          </List.Item>
          <List.Item>
            <List.Icon name="circle notched" />
            <List.Content>
              <List.Header>Driving</List.Header>
              <List.Description>
                I want to strengthen my driving abilities by learning to do
                Drift or Autocross.
              </List.Description>
            </List.Content>
          </List.Item>
        </List>
        <h3>Where would you like to travel?</h3>
        <List>
          <List.Item>
            <List.Icon name="angle double right" />
            <List.Content>
              <List.Header>ICELAND</List.Header>
              <List.Description>
                Iceland is the most unique and exciting place on the planet. You
                go to Iceland to have adventures and see natural beauty.
              </List.Description>
            </List.Content>
          </List.Item>
          <List.Item>
            <List.Icon name="angle double right" />
            <List.Content>
              <List.Header>New Zealand</List.Header>
              <List.Description>
                Iceland is the most unique and exciting place on the planet. You
                go to Iceland to have adventures and see natural beauty.
              </List.Description>
            </List.Content>
          </List.Item>
          <List.Item>
            <List.Icon name="angle double right" />
            <List.Content>
              <List.Header>San Francisco</List.Header>
              <List.Description>
                Iceland is the most unique and exciting place on the planet. You
                go to Iceland to have adventures and see natural beauty.
              </List.Description>
            </List.Content>
          </List.Item>
        </List>
      </Grid.Column>
    </Grid>
  </div>
);

export const pageQuery = graphql`
  query ProfileImageQuery {
    profileImage: imageSharp(id: { regex: "/profile/" }) {
      sizes(maxWidth: 1240) {
        ...GatsbyImageSharpSizes_noBase64
      }
    }
  }
`;

export default About;
