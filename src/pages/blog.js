import React from "react";
import Link from "gatsby-link";
import { Header, Item, Image } from "semantic-ui-react";
import { Container, Feed, Icon } from "semantic-ui-react";

const BlogPage = ({ data }) => (
  <Container fluid>
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
              <Feed.Date>{post.node.frontmatter.date}</Feed.Date>
            </Feed.Summary>
            <Feed.Meta>
              <a href="https://www.twitter.com/grahamplata">@grahamplata</a>
            </Feed.Meta>
            <Feed.Extra text>{post.node.excerpt}</Feed.Extra>
          </Feed.Content>
        </Feed.Event>
      ))}
    </Feed>
  </Container>
);

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      limit: 10
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { published: { eq: true } } }
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
