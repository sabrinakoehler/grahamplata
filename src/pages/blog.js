import React from 'react'
import Link from 'gatsby-link'

const BlogPage = ({ data }) => (
  <div>
    <h1>Blog</h1>
    <ul>
      {data.allMarkdownRemark.edges.map(post => (
        <li>
          <Link
            key={post.node.id}
            to={post.node.frontmatter.path}>
            {post.node.frontmatter.title}
          </Link>
          <p>{post.node.frontmatter.date}</p>
        </li>
      ))}
    </ul>
  </div>
)

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      limit: 10
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: {published: {eq: true } } }
    ) {
      edges {
        node {
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
`

export default BlogPage
