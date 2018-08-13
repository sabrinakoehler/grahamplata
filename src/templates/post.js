import React from "react";
import Link from "gatsby-link";
import { Container, Button, Icon } from "semantic-ui-react";
import { StaticQuery, graphql } from "gatsby"

const Template = ({ data, pathContext }) => {
  const { markdownRemark: post } = data;
  const { next, prev } = pathContext;

  return (
    <Container>
      <div style={{ marginBottom: 25 }}>
        <Button.Group floated="right">
          {prev && (
            <Link to={prev.frontmatter.path}>
              <Button icon>
                <Icon name="arrow left" />
              </Button>
            </Link>
          )}
          <Link to="/blog" style={{ paddingRight: "5px", paddingLeft: "5px" }}>
            <Button icon>
              <Icon name="arrow up" />
            </Button>
          </Link>
          {next && (
            <Link to={next.frontmatter.path}>
              <Button icon>
                <Icon name="arrow right" />
              </Button>
            </Link>
          )}
        </Button.Group>
        <div>
          <h1 style={{ margin: 0, display: "inline-block" }}>
            {post.frontmatter.title}
          </h1>
        </div>
        <div>
          <h3 style={{ margin: 0, display: "inline-block" }}>
            {post.frontmatter.date}
          </h3>
        </div>
      </div>
      <Container dangerouslySetInnerHTML={{ __html: post.html }} />
    </Container>
  );
};

export const postQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`;

export default Template;
