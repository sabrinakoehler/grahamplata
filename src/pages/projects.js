import React from "react";
import { Divider, Image, Grid, Header, Segment } from "semantic-ui-react";
import project from "../images/dota.png";

const Projects = ({ data }) => (
  <div>
    <Header as="h4" textAlign="center">
      <Header.Content />
    </Header>
    <Grid stackable columns={2}>
      <Grid.Column>
        <Header textAlign="center">
          <Header.Content />
        </Header>
        <Image src={project} fluid />
        <Segment basic>
          Dynamic DotA scorecard that displays a short synopsis of a player's
          overall performance. The Card utilizes React, Redux and stats provided
          by the openDota Project.
        </Segment>
      </Grid.Column>
      <Grid.Column>
        <Header as="h2" textAlign="center">
          <Header.Content>Dota Stats</Header.Content>
        </Header>
        <p>
          Aliquam eu dui congue, blandit nunc eget, tempor tortor. Sed euismod
          nunc risus, quis luctus lacus tincidunt nec. Ut cursus lacinia purus,
          a venenatis sem tristique ac. Vestibulum at sem gravida, consequat
          nisi vitae, faucibus est. Fusce feugiat, leo rhoncus sodales
          scelerisque, justo elit maximus tortor, nec finibus neque dui non
          elit. Etiam non ligula maximus, tincidunt orci nec, scelerisque diam.
          Nullam quis fringilla augue, id lobortis urna. Aenean euismod ex
          velit, sed finibus sapien iaculis nec. Maecenas bibendum justo id arcu
          imperdiet finibus. Donec convallis interdum rhoncus. Aenean porta urna
          non tellus commodo, vitae suscipit lectus lacinia. Donec feugiat metus
          quam, non auctor sem maximus sit amet. Aliquam ac libero in nisl
          maximus hendrerit eget pretium odio. Phasellus sed lacus sed enim
          egestas mollis.
        </p>
        <Divider horizontal section>
          Much ado about dota
        </Divider>
        <p>
          Dota is a multiplayer video game in which two teams of five players
          compete to collectively destroy a large structure defended by the
          opposing team known as the "Ancient", whilst defending their own.
        </p>
        <p>
          This game united my friend group through our formative years. I was
          first introduced to the game during a weekend LAN party I had with
          friends. At the time Dota had many shortcomings, this was the time of
          private lobbies, frequent disconnects, and constant map downloads.
          Even with all its hard edges, it united our friend group into one
          focused effort. I can attribute Dota for keeping my friend group
          together when we departed for college. 10 years later we are still
          going strong. It's amazing how far the game has come. -- Graham
        </p>
      </Grid.Column>
    </Grid>
  </div>
);

export default Projects;
