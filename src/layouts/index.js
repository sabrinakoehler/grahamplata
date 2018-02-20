import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { Button, Container, Divider, Grid, Image, Menu, Segment } from 'semantic-ui-react'

import MainMenu from '../components/MainMenu'

import 'semantic-ui-css/semantic.min.css';

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Graham Plata's Digital Sandbox"
      meta={[{ name: 'description', content: 'Sample' }, { name: 'keywords', content: 'sample, something' }]} />
    <Container style={{ marginTop: '1em' }}>
      <MainMenu />
      {children()}
    </Container>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
