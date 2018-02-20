import React, { Component } from 'react'
import Link from 'gatsby-link'
import { Input, Menu } from 'semantic-ui-react'

class MainMenu extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu secondary>
        <Menu.Menu position='right'>
          <Link to="/"><Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick} ></Menu.Item></Link>
          <Link to="/about"><Menu.Item name='about' active={activeItem === 'about'} onClick={this.handleItemClick} ></Menu.Item></Link>
          <Link to="/blog"><Menu.Item name='blog' active={activeItem === 'blog'} onClick={this.handleItemClick} ></Menu.Item></Link>
          <Link to="/portfolio"><Menu.Item name='portfolio' active={activeItem === 'portolfio'} onClick={this.handleItemClick} ></Menu.Item></Link>
          <Link to="/projects"><Menu.Item name='projects' active={activeItem === 'projects'} onClick={this.handleItemClick} ></Menu.Item></Link>
        </Menu.Menu>
      </Menu >
    )
  }
}

export default MainMenu;