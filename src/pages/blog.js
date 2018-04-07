import React from "react";
import Link from "gatsby-link";
import { Header, Item, Image } from "semantic-ui-react";
import { Container, Feed, Icon } from "semantic-ui-react";

const styles = {
  syapse: {
    color: "#21C2D2",
    fontWeight: 700,
    textTransform: "uppercase"
  },
  spacing: {
    paddingTop: "3em",
    paddingBottom: "3em"
  }
};

const BlogPage = ({ data }) => (
  <div style={styles.spacing}>
    <Container text>
      <Header as="h2">Blog</Header>
      <Feed>
        {data.allMarkdownRemark.edges.map(post => (
          <Feed.Event key={post.node.id}>
            <Feed.Label image="http://via.placeholder.com/150x150" />
            <Feed.Content>
              <Feed.Summary>
                <Link to={post.node.frontmatter.path}>
                  {post.node.frontmatter.title}
                </Link>
              </Feed.Summary>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <Feed.Meta>
                  Author:{" "}
                  <a href="https://www.twitter.com/grahamplata">@grahamplata</a>
                </Feed.Meta>
                <Feed.Meta>Date: {post.node.frontmatter.date}</Feed.Meta>
              </div>
              <Feed.Extra>{post.node.excerpt}</Feed.Extra>
            </Feed.Content>
          </Feed.Event>
        ))}
      </Feed>
    </Container>
  </div>
);

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      limit: 10
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          excerpt(pruneLength: 250)
          id
          frontmatter {
            title
            path
            date
          }
        }
      }
    }
  }
`;

export default BlogPage;
