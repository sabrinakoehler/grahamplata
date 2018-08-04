import React from "react";
import { Header, Divider } from "semantic-ui-react";

// Projects
import DotaStats from "../projects/dotastats";
import Reel from "../projects/reel";

const Projects = () => (
  <div>
    <Header as="h2" textAlign="left">
      <Header.Content>Personal Projects</Header.Content>
    </Header>
    <DotaStats />
    <Divider style={styles.spacer} />
    <Reel />
  </div>
);

const styles = {
  spacer: {
    paddingBottom: "20px"
  }
};

export default Projects;
