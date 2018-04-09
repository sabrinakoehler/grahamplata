import React from "react";
import Link from "gatsby-link";
import { Grid, Header } from "semantic-ui-react";

const styles = {
  spacing: {
    paddingTop: "3em",
    paddingBottom: "3em"
  }
};

const Projects = ({ data }) => (
  <div style={styles.spacing}>
    <Grid stackable columns={2}>
      <Grid.Column>
        <h2>Projects</h2>
        <h3>{"<Coming soon />"}</h3>
      </Grid.Column>
      <Grid.Column />
    </Grid>
  </div>
);

export default Projects;
