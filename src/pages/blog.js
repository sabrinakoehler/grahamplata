import React from "react";
import Link from "gatsby-link";
import { Header, Item, Image } from "semantic-ui-react";

const BlogPage = ({ data }) => (
  <div>
    {data.allMarkdownRemark.edges.map(post => (
      <Item.Group>
        <Item>
          <Image src="http://via.placeholder.com/150x150" />
          <Item.Content>
            <Item.Header as="a">
              <Link key={post.node.id} to={post.node.frontmatter.path}>
                {post.node.frontmatter.title}
              </Link>
            </Item.Header>
            <Item.Meta>
              <p>{post.node.frontmatter.date}</p>
            </Item.Meta>
            <Item.Description>
              <p>{post.node.excerpt}</p>
            </Item.Description>
          </Item.Content>
        </Item>
      </Item.Group>
    ))}
  </div>
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
