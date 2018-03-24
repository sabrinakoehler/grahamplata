import React from "react";
import Helmet from "react-helmet";
import Link from "gatsby-link";
import { Button } from "semantic-ui-react";

export default function Template({ data }) {
  const { markdownRemark: post } = data;
  return (
    <div>
      <div style={{ marginBottom: 25 }}>
        <h1 style={{ margin: 0, display: "inline-block" }}>
          {post.frontmatter.title}
        </h1>
        <Button.Group style={{ float: "right" }}>
          <Link style={{ textDecoration: "none" }} to="/">
            <Button>{post.frontmatter.title}</Button>
          </Link>
          <Button.Or />
          <Link style={{ textDecoration: "none" }} to="/blog">
            <Button>Index</Button>
          </Link>
          <Button.Or />
          <Link style={{ textDecoration: "none" }} to="/">
            <Button>{post.frontmatter.title}</Button>
          </Link>
        </Button.Group>
      </div>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </div>
  );
}

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
