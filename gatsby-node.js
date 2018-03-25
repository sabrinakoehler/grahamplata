const path = require("path");

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators;

  const postTemplate = path.resolve("src/templates/post.js");

  return graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            excerpt(pruneLength: 250)
            html
            id
            frontmatter {
              path
              title
              date
            }
          }
        }
      }
    }
  `).then(res => {
    if (res.errors) {
      return Promise.reject(res.errors);
    }

    const posts = res.data.allMarkdownRemark.edges;

    posts.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: postTemplate,
        context: {}
      });
    });
    return posts;
  });
};
