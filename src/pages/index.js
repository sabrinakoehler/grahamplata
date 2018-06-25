import React from 'react'
import { Grid, Divider, Header } from 'semantic-ui-react'

const styles = {
  wrapper: {
    marginTop: 100,
  },
  graham: {
    fontSize: 30,
    color: '#00b5ad',
    fontWeight: 'bold',
  },
}

const IndexPage = () => (
  <Grid style={styles.wrapper} stackable columns={2}>
    <Grid.Row>
      <Grid.Column>
        <Header as="h1" textAlign="left">
          Hey, I'm <a style={styles.graham}>Graham</a>. I’m a photographer,
          gamer & side-project enthusiast. I'm currently a Support Engineer at
          Syapse.
        </Header>
        <Divider />
      </Grid.Column>
      <Grid.Column>
        <div />
      </Grid.Column>
    </Grid.Row>
  </Grid>
)

export default IndexPage
