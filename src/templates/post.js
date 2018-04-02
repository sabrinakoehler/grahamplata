import React from "react";
import Helmet from "react-helmet";
import Link from "gatsby-link";
import { Container, Button } from "semantic-ui-react";

const Template = ({ data, pathContext }) => {
  const { markdownRemark: post } = data;
  // const { next, prev } = pathContext;

  return (
    <Container text>
      <div style={{ marginBottom: 25 }}>
        <Link style={{ textDecoration: "none", float: "right" }} to="/blog">
          <Button compact color="teal">
            Return to Index
          </Button>
        </Link>
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
