import React from "react";
import {
  Divider,
  Image,
  Grid,
  Header,
  Segment,
  Statistic
} from "semantic-ui-react";

const Projects = ({ data }) => (
  <div>
    <Header as="h4" textAlign="center">
      <Header.Content />
    </Header>
    <Grid stackable columns={2}>
      <Grid.Column>
        <Header textAlign="center">
          <Header.Content>
            <Statistic.Group> 
              <Statistic size='tiny'>
                <Statistic.Value>22</Statistic.Value>
                <Statistic.Label>Commits</Statistic.Label>
              </Statistic>
              <Statistic size='tiny'>
                <Statistic.Value>31,200</Statistic.Value>
                <Statistic.Label>Lines</Statistic.Label>
              </Statistic>
              <Statistic size='tiny'>
                <Statistic.Value>12</Statistic.Value>
                <Statistic.Label>Modules</Statistic.Label>
              </Statistic >
            </Statistic.Group>
          </Header.Content>
        </Header>
        <Image src="http://via.placeholder.com/400x400" fluid />
        <Segment basic>
          Pellentesque habitant morbi tristique senectus et netus et malesuada
          fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae,
          ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam
          egestas semper. Aenean ultricies mi vitae est. Mauris placerat
          eleifend leo.
        </Segment>
      </Grid.Column>
      <Grid.Column>
        <Header as="h2" textAlign="center">
          <Header.Content>Dota Stats</Header.Content>
        </Header>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
          scelerisque, eros eu pellentesque tempus, nisl arcu fermentum turpis,
          tincidunt vehicula lorem diam blandit justo. Vestibulum viverra, nulla
          eu tristique ultricies, mi erat vulputate purus, eu mollis turpis odio
          at quam. Duis augue est, sodales id pharetra at, venenatis at tortor.
          In tristique tincidunt accumsan. Praesent elementum metus vitae mauris
          porta, ac sagittis arcu bibendum. Donec sed justo eu mi luctus congue.
          Curabitur risus erat, imperdiet et lacus pellentesque, auctor luctus
          risus. Maecenas sit amet magna ac urna aliquam elementum at vel nunc.
          Mauris lacus justo, finibus nec ornare eget, posuere nec arcu.
        </p>
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
          Or
        </Divider>
        <p>
          Pellentesque faucibus vitae enim vel iaculis. Sed ut risus quam.
          Quisque imperdiet at mauris eget vestibulum. Maecenas luctus sapien ac
          orci porta vulputate. Aliquam ac sodales urna. Vivamus mollis
          hendrerit turpis, in porta enim. Cras nibh neque, sollicitudin
          placerat ultrices ac, placerat sed tellus. Nullam ultrices dignissim
          ipsum et ultricies. Proin scelerisque, nibh eget vestibulum vulputate,
          turpis nisi ornare nulla, id fermentum libero eros ac justo. Morbi
          eget tincidunt metus, vel congue magna. Pellentesque vel ante id
          sapien porta laoreet. Nunc aliquam non augue quis laoreet. Integer ut
          mattis ante. Maecenas aliquet est odio, ac finibus libero sollicitudin
          a. Donec sit amet arcu in nunc viverra fringilla. Praesent nec neque
          dictum, pellentesque elit egestas, gravida turpis. Maecenas facilisis
          magna non nisl efficitur, et aliquam purus tempor. Vestibulum mauris
          orci, volutpat eget justo volutpat, dapibus tempus arcu. Curabitur id
          quam dictum, pellentesque dui in, rutrum mi.
        </p>
        <p>
          Pellentesque habitant morbi tristique senectus et netus et malesuada
          fames ac turpis egestas. Pellentesque blandit ipsum sit amet mi
          malesuada porttitor. Nam condimentum auctor velit, nec efficitur justo
          tristique et. In hac habitasse platea dictumst. Aenean elementum enim
          lacus, ac dignissim orci pharetra ac. Sed a arcu risus. Integer
          tempus, purus rhoncus varius cursus, risus ligula euismod risus, non
          placerat ipsum justo vitae ante. Mauris a venenatis justo, sit amet
          euismod nisi. Aenean aliquet libero mi, sed accumsan mi pulvinar eget.
          Nulla sollicitudin dictum dui nec mattis. In hac habitasse platea
          dictumst. Suspendisse potenti. Pellentesque habitant morbi tristique
          senectus et netus et malesuada fames ac turpis egestas. Nunc sagittis,
          metus quis volutpat sagittis, metus risus viverra lorem, nec interdum
          metus velit non nisl. Praesent et eros semper, maximus purus vitae,
          sagittis massa. Nulla pharetra sapien lectus, in molestie enim
          accumsan id.
        </p>
      </Grid.Column>
    </Grid>
  </div>
);

export default Projects;
