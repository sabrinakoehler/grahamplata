import React from "react";
import Link from "gatsby-link";
import { Header, Image, Container, Feed, Icon } from "semantic-ui-react";

const styles = {
  syapse: {
    color: "#21C2D2",
    fontWeight: 700,
    textTransform: "uppercase"
  },
  spacing: {
    paddingTop: "3em",
    paddingBottom: "3em"
  },
  label: {
    float: "left",
    paddingRight: "7px",
    paddingTop: "10px"
  },
  extra: {
    paddingTop: "8px"
  }
};

const BlogPage = ({ data }) => (
  <div style={styles.spacing}>
    <Container text>
      <Header as="h2">Blog</Header>
      <Feed>
        {data.allMarkdownRemark.edges.map(post => (
          <Feed.Event key={post.node.id}>
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
              <Feed.Label
                style={styles.label}
                image={
                  post.node.frontmatter.featuredImage.childImageSharp.sizes
                }
              />
              <Feed.Extra style={styles.extra}>{post.node.excerpt}</Feed.Extra>
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
          excerpt(pruneLength: 450)
          id
          frontmatter {
            title
            path
            date
            featuredImage {
              childImageSharp {
                sizes(maxWidth: 150) {
                  ...GatsbyImageSharpSizes
                }
              }
            }
          }
        }
      }
    }
  }
`;

export default BlogPage;
