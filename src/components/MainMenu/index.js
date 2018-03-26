import React, { Component } from "react";
import Link from "gatsby-link";
import { Input, Menu } from "semantic-ui-react";

class MainMenu extends Component {
  state = { activeItem: location.pathname.slice(1) };
  props = { location };
  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name });
  }

  render() {
    const { activeItem } = this.state;

    return (
      <Menu secondary>
        <Menu.Menu position="right">
          <Link to="/">
            <Menu.Item
              name="home"
              active={activeItem === ""}
              onClick={this.handleItemClick}
              color="teal"
            />
          </Link>
          <Link to="/about">
            <Menu.Item
              name="about"
              active={activeItem === "about"}
              onClick={this.handleItemClick}
              color="purple"
            />
          </Link>
          <Link to="/blog">
            <Menu.Item
              name="blog"
              active={activeItem === "blog"}
              onClick={this.handleItemClick}
              color="teal"
            />
          </Link>
          <Link to="/resume">
            <Menu.Item
              name="resume"
              active={activeItem === "resume"}
              onClick={this.handleItemClick}
              color="teal"
            />
          </Link>
        </Menu.Menu>
      </Menu>
    );
  }
}

export default MainMenu;
