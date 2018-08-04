import React from "react";
import { Grid, Header } from "semantic-ui-react";
import ReactPlayer from "react-player";

const Reel = () => (
  <div>
    <Grid stackable columns={2}>
      <Grid.Column>
        <Header as="h2" textAlign="left">
          <Header.Content>2016 Video Reel</Header.Content>
        </Header>
        <p style={{ paddingTop: "10px" }}>
          A few years ago I worked for a couple boutique video studios creating
          commercials, music videos and motion graphics. Aside you can find a
          selection of shots from my favorite projects. Since my career switch I
          find myself doing less video content but enjoying it so much more.
        </p>
        <p style={{ paddingTop: "10px" }}>
          In the reel you will find clips from:
        </p>
        <ul>
          <li>A camera product highlight</li>
          <li>A bowling short</li>
          <li>A rock opera</li>
          <li>A rockabilly festival</li>
          <li>A spec medical piece</li>
          <li>A corporate drivers clinic</li>
        </ul>
        <small>-- Reel Last Updated: 2016</small>
      </Grid.Column>
      <Grid.Column>
        <Header textAlign="left">
          <Header.Content />
        </Header>
        <div style={styles.playerWrapper}>
          <ReactPlayer
            style={styles.reactPlayer}
            url="https://vimeo.com/177779267"
            width="100%"
            height="100%"
            muted
          />
        </div>
      </Grid.Column>
    </Grid>
  </div>
);

const styles = {
  playerWrapper: {
    position: "relative",
    paddingTop: "56.25%"
  },
  reactPlayer: {
    position: "absolute",
    top: 0,
    left: 0
  }
};

export default Reel;
