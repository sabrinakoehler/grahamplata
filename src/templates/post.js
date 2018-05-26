import React from "react";
import Helmet from "react-helmet";
import Link from "gatsby-link";
import { Container, Button } from "semantic-ui-react";

const Template = ({ data, pathContext }) => {
  const { markdownRemark: post } = data;
  const { next, prev } = pathContext;

  return (
    <Container>
      <div style={{ marginBottom: 25 }}>
        <Button.Group floated="right">
          {prev && (
            <Link to={prev.frontmatter.path}>
              <Button>{prev.frontmatter.title}</Button>
            </Link>
          )}
          <Link to="/blog" style={{ paddingRight: "5px", paddingLeft: "5px" }}>
            <Button color="teal">Return to Index</Button>
          </Link>
          {next && (
            <Link to={next.frontmatter.path}>
              <Button>{next.frontmatter.title}</Button>
            </Link>
          )}
        </Button.Group>
        <h1 style={{ margin: 0, display: "inline-block" }}>
          {post.frontmatter.title}
        </h1>
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
        path
        title
      }
    }
  }
`;

export default Template;
