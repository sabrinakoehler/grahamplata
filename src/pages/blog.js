import React from "react";
import { Container, Card, Image, Grid, Icon } from "semantic-ui-react";
import Layout from "../components/layout";
import { Link, StaticQuery, graphql } from "gatsby";

const BlogPage = ({ children, props }) => (
  <StaticQuery
    query={graphql`
      {
        allMarkdownRemark(
          limit: 10
          sort: { fields: [frontmatter___date], order: DESC }
        ) {
          edges {
            node {
              excerpt(pruneLength: 100)
              id
              frontmatter {
                title
                path
                date(formatString: "MMMM DD, YYYY")
                featuredImage {
                  childImageSharp {
                    sizes(maxWidth: 550) {
                      ...GatsbyImageSharpSizes
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={data => (
      <Layout>
        <Container>
          <Grid stackable columns={3}>
            {data.allMarkdownRemark.edges.map(post => (
              <Grid.Column key={post.node.id}>
                <Card fluid key={post.node.id}>
                  <Image
                    fluid
                    src={
                      post.node.frontmatter.featuredImage.childImageSharp.sizes
                        .src
                    }
                  />
                  <Card.Content>
                    <Card.Header>
                      <Link to={post.node.frontmatter.path}>
                        {post.node.frontmatter.title}
                      </Link>
                    </Card.Header>
                    <Card.Meta>
                      <span className="date">{post.node.frontmatter.date}</span>
                    </Card.Meta>
                    <Card.Description>{post.node.excerpt}</Card.Description>
                  </Card.Content>
                  <Card.Content extra>
                    <a href="https://twitter.com/grahamplata">
                      <Icon name="user" />
                      @grahamplata
                    </a>
                  </Card.Content>
                </Card>
              </Grid.Column>
            ))}
          </Grid>
        </Container>
      </Layout>
    )}
  />
);

export default BlogPage;
