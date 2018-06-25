import React, { Component } from "react";
import Link from "gatsby-link";
import { Menu } from "semantic-ui-react";

class MainMenu extends Component {
  state = { activeItem: null };
  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name });
  };

  componentDidMount() {
    this.setState({ activeItem: location.pathname.slice(1) });
  }

  render() {
    const { activeItem } = this.state;

    return (
      <Menu secondary>
        <Menu.Menu position="right">
          <Menu.Item
            as={Link}
            to="/"
            name="home"
            active={activeItem === ""}
            onClick={this.handleItemClick}
            color="teal"
          />
          <Menu.Item
            as={Link}
            to="/about"
            name="about"
            active={activeItem === "about"}
            onClick={this.handleItemClick}
            color="teal"
          />
          <Menu.Item
            as={Link}
            to="/blog"
            name="blog"
            active={activeItem === "blog"}
            onClick={this.handleItemClick}
            color="teal"
          />
          <Menu.Item
            as={Link}
            to="/projects"
            name="projects"
            active={activeItem === "projects"}
            onClick={this.handleItemClick}
            color="teal"
          />
        </Menu.Menu>
      </Menu>
    );
  }
}

export default MainMenu;
